import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const generatePDF = async (elementId: string, filename: string) => {
  try {
    // 로딩 표시
    const loadingElement = document.createElement('div');
    loadingElement.innerHTML = 'PDF 생성 중...';
    loadingElement.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      padding: 20px 40px;
      border-radius: 10px;
      box-shadow: 0 10px 40px rgba(0,0,0,0.2);
      z-index: 10000;
      font-weight: bold;
    `;
    document.body.appendChild(loadingElement);

    // 대상 요소 가져오기
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Element not found');
    }

    // 원본 스타일 저장
    const originalStyle = element.style.cssText;

    // PDF용 스타일 적용
    element.style.cssText = `
      width: 210mm;
      min-height: 297mm;
      padding: 20mm;
      background: white;
      color: black;
    `;

    // HTML을 캔버스로 변환
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // 원본 스타일 복원
    element.style.cssText = originalStyle;

    // PDF 생성
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const imgWidth = 210;
    const pageHeight = 297;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    // 첫 페이지 추가
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 추가 페이지가 필요한 경우
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // PDF 다운로드
    pdf.save(filename);

    // 로딩 제거
    document.body.removeChild(loadingElement);

    return true;
  } catch (error) {
    console.error('PDF 생성 실패:', error);
    alert('PDF 생성에 실패했습니다.');
    return false;
  }
};

// 간단한 PDF 다운로드 (텍스트 기반)
export const downloadSimplePDF = (title: string, content: string[], filename: string) => {
  const pdf = new jsPDF();

  // 한글 폰트 처리를 위한 설정
  pdf.setFont('helvetica');

  // 제목 추가
  pdf.setFontSize(20);
  pdf.text(title, 20, 20);

  // 내용 추가
  pdf.setFontSize(12);
  let yPosition = 40;

  content.forEach((line) => {
    if (yPosition > 270) {
      pdf.addPage();
      yPosition = 20;
    }

    // 긴 텍스트는 자동 줄바꿈
    const lines = pdf.splitTextToSize(line, 170);
    lines.forEach((splitLine: string) => {
      pdf.text(splitLine, 20, yPosition);
      yPosition += 7;
    });
  });

  pdf.save(filename);
};