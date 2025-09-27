// 임의의 진료 내역 데이터
const dummyMedicalRecords = [
    {
        id: 1,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
    },
    {
        id: 2,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
    },
    {
        id: 3,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
    },
    {
        id: 4,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
    },
    {
        id: 5,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
    },
    {
        id: 6,
        date: "2023년 10월 26일",
        diagnosis: "급성 위염",
        prescription: "위산 억제제(Omeprazole) 1일 1회, 위점막 보호제(Rebamipide) 1일 3회",
        detail: "약물 치료 및 식단 관리 교육. 증상 완화와 확인 후 내원. 필요할 경우 추가 치료 예정."
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