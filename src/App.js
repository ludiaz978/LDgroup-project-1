import React from 'react';
import './App.css';
import Header from './Header';
import Feed from './Feed'




function App () {

  
  
  id: 1,
  fullName: "Bob Jones",
  designation: "JavaScript Developer",
  gender: "male",
  teamName: "TeamA"
},
{
  id: 2,
  fullName: "Jill Bailey",
  designation: "Node Developer",
  gender: "female",
  teamName: "TeamA"
},
{
  id: 3,
  fullName: "Gail Shepherd",
  designation: "Java Developer",
  gender: "female",
  teamName: "TeamA"
},
{
  id: 4,
  fullName: "Sam Reynolds",
  designation: "React Developer",
  gender: "male",
  teamName: "TeamB"
},
{
  id: 5,
  fullName: "David Henry",
  designation: "DotNet Developer",
  gender: "male",
  teamName: "TeamB"
},
{
  id: 6,
  fullName: "Sarah Blake",
  designation: "SQL Server DBA",
  gender: "female",
  teamName: "TeamB"
},
{
  id: 7,
  fullName: "James Bennet",
  designation: "Angular Developer",
  gender: "male",
  teamName: "TeamC"
},
{
  id: 8,
  fullName: "Jessica Faye",
  designation: "API Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 9,
  fullName: "Lita Stone",
  designation: "C++ Developer",
  gender: "female",
  teamName: "TeamC"
},
{
  id: 10,
  fullName: "Daniel Young",
  designation: "Python Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 11,
  fullName: "Adrian Jacobs",
  designation: "Vue Developer",
  gender: "male",
  teamName: "TeamD"
},
{
  id: 12,
  fullName: "Devin Monroe",
  designation: "Graphic Designer",
  gender: "male",
  teamName: "TeamD"
});

function handleTeamSelectionChange(event) {
  setTeam(event.target.value);
}

function handleEmployeeCardClick(event) {
  const transformedEmployees = employees.map (employee) => employee.id === parseInt(event.currentTarget.id)
      ?(employee.teamName === selectedTeam)? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee;
      setEmployees(transformedEmployees);
  }
 

  return (
    <div>
      <h3>Profiles of Pets</h3>
      <Header /> {/* Use Header component here */}
      <Feed />   {/* Use Feed component here */}
        {/* You can use PawFile component here if needed */}
    </div>
  );
}
export default App;