const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    }); 
};

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune")
    .then(res => {
      const data = res.data;
      alert(data);
    });
};

const inspirationBtn = document.getElementById("inspirationButton");

const getInspiration = () => {
    axios.get("http://localhost:4000/api/inspiration")
      .then(res => {
        const data = res.data;
        alert(data);
      });
};

const addGoalBtn = document.getElementById("addGoalButton");
const goalInput = document.getElementById("goalInput");
const goalList = document.getElementById("goalList");

const goalArr = []
const checkedGoals = []

const addGoal = () => {
    const goal = goalInput.value;
    axios.post("http://localhost:4000/api/goals", { goal })
      .then(res => {
        alert(res.data.message);
        goalInput.value = "";
        getGoals();
        goalArr.push(goal)
        checkedGoals.push(false)
        console.log(goalArr)
        console.log(checkedGoals)
      });
};

const updateGoalBtn = document.getElementById("updateGoalButton");

const updateGoal = (id, goal) => {
    const updatedGoal = prompt("Enter the updated goal:", goal);
    if (updatedGoal) {
      axios.put(`http://localhost:4000/api/goals/${id}`, { goal: updatedGoal })
        .then(res => {
          alert(res.data.message);
          getGoals();
          goalArr[id] = updatedGoal;
          checkedGoals[id] = false; 
          console.log(goalArr)
          console.log(checkedGoals)
        });
    }
};

const deleteGoalBtn = document.getElementById("deleteGoalButton");

const deleteGoal = (id) => {
    axios.delete(`http://localhost:4000/api/goals/${id}`)
      .then(res => {
        alert(res.data.message);
        getGoals();
        goalArr.splice(id, 1)
        checkedGoals.splice(id, 1)
        console.log(goalArr)
        console.log(checkedGoals)
      });
};

const getGoalsBtn = document.getElementById("getGoalsButton");

const getGoals = () => {
    axios.get("http://localhost:4000/api/goals")
      .then(res => {
        const goals = res.data;
        goalList.innerHTML = "";
        goals.forEach((goal, index) => {
          const li = document.createElement("li");
          const checkbox = document.createElement("input");
          checkbox.checked = checkedGoals[index]
          checkbox.type = "checkbox";
          checkbox.addEventListener("click", () => {
            if (checkbox.checked) {
              li.style.textDecoration = "line-through";
              alert("You've completed your goal.");
              checkedGoals[index] = true
              console.log(checkedGoals)
            } else {
              li.style.textDecoration = "none";
              alert('Your goal has not been completed.');
              checkedGoals[index] = false
              console.log(checkedGoals)
            }
          });
          const updateBtn = document.createElement("button");
          updateBtn.textContent = "Update";
          updateBtn.addEventListener("click", () => {
            updateGoal(index, goal);
          });
          const deleteBtn = document.createElement("button");
          deleteBtn.textContent = "Delete";
          deleteBtn.addEventListener("click", () => {
            deleteGoal(index);
          });
          li.textContent = goal;
          li.appendChild(checkbox);
          li.appendChild(updateBtn);
          li.appendChild(deleteBtn);
          goalList.appendChild(li);
        });
      });
  };
        

const updateGoalIdInput = document.getElementById("updateGoalIdInput");
const deleteGoalIdInput = document.getElementById("deleteGoalIdInput");

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune);
inspirationBtn.addEventListener('click', getInspiration);
addGoalBtn.addEventListener('click', addGoal);
updateGoalBtn.addEventListener('click', updateGoal);
deleteGoalBtn.addEventListener('click', deleteGoal);
getGoalsBtn.addEventListener('click', getGoals);