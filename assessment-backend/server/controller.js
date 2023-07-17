const goals = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            "A beautiful, unexpected surprise is coming your way.",
            "Your hard work will pay off in the near future.",
            "You will find great success in your endeavors.",
            "An exciting opportunity will present itself to you.",
            "Good fortune will follow you wherever you go."
        ]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);  
    },

    getInspiration: (req, res) => {
        const inspirations = [
          "Success is not final, failure is not fatal: It is the courage to continue that counts.",
          "The only way to do great work is to love what you do.",
          "Believe you can and you're halfway there.",
          "The future belongs to those who believe in the beauty of their dreams.",
          "Don't watch the clock; do what it does. Keep going."
        ];
        let randomIndex = Math.floor(Math.random() * inspirations.length);
        let randomInspiration = inspirations[randomIndex];
        res.status(200).send(randomInspiration);
    },
      
    addGoal: (req, res) => {
        const { goal } = req.body;
        goals.push(goal);
        res.status(201).send({ message: "Goal added successfully" });
    },
      
    updateGoal: (req, res) => {
        const { id } = req.params;
        const { goal } = req.body;
        goals[id] = goal;
        res.status(200).send({ message: "Goal updated successfully" });
    },
      
    deleteGoal: (req, res) => {
        const { id } = req.params;
        goals.splice(id, 1);
        res.status(200).send({ message: "Goal deleted successfully" });
    },
      
    getGoals: (req, res) => {
        res.status(200).send(goals);
      },
    };
    