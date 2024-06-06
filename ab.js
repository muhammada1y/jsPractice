let attendance = [
    { name: "ali", attendance: true },
    { name: "ali", attendance: true },
    { name: "ali", attendance: true },
    { name: "ali", attendance: true },
    { name: "ali", attendance: true },
    { name: "ali", attendance: false },
    { name: "ali", attendance: true },
    { name: "ali", attendance: true },
    { name: "ali", attendance: false },
    { name: "ali", attendance: false }
  ];
  
  const user = "ali";
  
  const result = attendance.reduce(
    ([presents, absents], { name, attendance }) => {
      if (name === user) {
        return attendance ? [presents + 1, absents] : [presents, absents + 1];
      }
      return [presents, absents];
    },
    [0, 0]
  );
  
  console.log(`Presents: ${result[0]}`);
  console.log(`Absents: ${result[1]}`);
  console.log(`Total Absentees: ${attendance.filter((item) => item.name === user && !item.attendance).length}`);