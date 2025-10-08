import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landingpageprice() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (plan: string) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: "Wellness Starter",
      price: "Free",
      sessions: "2 one-on-one sessions/month",
      communityAccess: "Access to public support groups",
      resources: "Basic self-care guides & tools",
      backgroundColor: "bg-green-700",
      buttonColor: "bg-green-600",
    },
    {
      name: "Mindful Growth",
      price: "$29.99 / month",
      sessions: "8 therapy sessions/month",
      communityAccess: "Private group support + chat access",
      resources: "Guided meditations & mental health resources",
      backgroundColor: "bg-blue-700",
      buttonColor: "bg-blue-600",
    },
    {
      name: "Healing Unlimited",
      price: "$59.99 / month",
      sessions: "Unlimited therapy sessions",
      communityAccess: "Private group & 1-on-1 support chats",
      resources: "Full library access + personalized coaching",
      backgroundColor: "bg-purple-700",
      buttonColor: "bg-purple-600",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {plans.map((plan) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, translateX: "-100%" }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 2 }}
          onClick={() => handlePlanSelect(plan.name)}
          className={`cursor-pointer border rounded-lg p-8 w-full sm:w-80 md:w-1/3 shadow-lg transform transition-transform hover:scale-105
            ${selectedPlan === plan.name ? "ring-4 ring-purple-400" : ""}
            ${selectedPlan === plan.name ? "shadow-xl" : "shadow-md"} hover:shadow-xl`}
        >
          <div className={`${plan.backgroundColor} text-white p-4 rounded-t-lg text-center`}>
            <Typography variant="h5" className="font-semibold">
              {plan.name}
            </Typography>
          </div>
          <div className="p-6 text-center border-b text-gray-700">
            <Typography variant="h6">{plan.price}</Typography>
          </div>
          <div className="py-4 px-2 text-center text-gray-600">
            <ul className="list-none space-y-2">
              <li>🧘 {plan.sessions}</li>
              <li>🤝 {plan.communityAccess}</li>
              <li>📚 {plan.resources}</li>
            </ul>
          </div>
          <div className="mt-6">
            <Button
              variant="contained"
              className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-full`}
            >
              <Link to="/signup" className="w-full block text-white text-center">
                Choose Plan
              </Link>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Landingpageprice;

