// 임의의 진료 내역 데이터
const dummyMedicalRecords = [
    {
        id: 1,
        name: "신경준",
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription:
            "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail:
            "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정.",
    },
    {
        id: 2,
        name: "홍길동",
        date: "2023년 9월 10일",
        diagnosis: "만성 두통",
        prescription: "진통제 1일 2회",
        detail: "스트레스 관리 및 충분한 수면 권장.",
    },
    {
        id: 3,
        name: "신경준",
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription:
            "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail:
            "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정.",
    },
    {
        id: 4,
        name: "신경준",
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription:
            "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail:
            "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정.",
    },
];

// useEffect(() => {
//     // 실제 API 엔드포인트로 교체하세요
//     fetch("/api/medical-records")
//         .then((res) => res.json())
//         .then((data) => setRecords(data))
//         .catch((err) => console.error(err));
// }, []);

export default dummyMedicalRecords;