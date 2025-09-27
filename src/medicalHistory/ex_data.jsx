// public 폴더의 의료_더미_데이터.json 파일에서 진료 내역 데이터를 가져오는 함수
const getMedicalRecords = async () => {
    try {
        // public 폴더의 JSON 파일을 fetch
        const response = await fetch('/diseaseDump.json');
        if (!response.ok) {
            throw new Error('데이터를 가져오는데 실패했습니다.');
        }
        const data = await response.json();
        
        // 데이터를 medicalHistory 컴포넌트에서 사용할 수 있는 형태로 변환
        return data.map((record, index) => ({
            id: index + 1,
            date: formatDate(record.resTreatStartDate),
            diagnosis: record.resDiseaseName,
            prescription: `${record.resDrugName} ${record.resTotalDosingdays}일`,
            detail: `${record.resHospitalName} ${record.resDepartment}에서 ${record.resTreatType} 치료. 총 진료비: ${record.resTotalAmount.toLocaleString()}원 (본인부담: ${record.resDeductibleAmt.toLocaleString()}원)`
        }));
    } catch (error) {
        console.error('JSON 파싱 오류:', error);
        return [];
    }
};

// 날짜 포맷팅 함수
const formatDate = (dateNumber) => {
    const year = Math.floor(dateNumber / 10000);
    const month = Math.floor((dateNumber % 10000) / 100);
    const day = dateNumber % 100;
    return `${year}년 ${month}월 ${day}일`;
};

export default getMedicalRecords;