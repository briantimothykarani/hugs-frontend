
import { Button, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, type SetStateAction } from 'react';
import { Link } from 'react-router-dom';

function LandingPagePrice() {
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handlePlanSelect = (plan: string | SetStateAction<null>) => {
        setSelectedPlan(plan);
    };

    const plans = [
        {
            name: 'Basic',
            price: 'Free', 
            Accounts: '2 Accounts',
            Access:'1000 Students',
            backgroundColor:'bg-black',
            buttonColor: 'bg-green-600'
        },
        {
            name: 'Pro',
            price: '$24.99 / year',
            storage: '25GB Storage',
            Accounts: '15 Accounts',
            Access:'10000 Students',
            Councelling :'100 Councellors available',
            backgroundColor: 'bg-blue-600',
            buttonColor: 'bg-green-600'
        },
        {
            name: 'Premium',
            price: '$49.99 / year',
            storage: '50GB Storage',
           Accounts:'unlimited',
           Councelling :'unlimited councellors',
           backgroundColor: 'bg-purple-600',
           buttonColor: 'bg-green-600'
       
        },
    ];

    return (
        <div className="flex  justify-center gap-6 p-8">
            {plans.map((plan) => (

                <motion.div
                    initial={{ opacity: 0, translateX: "-100%" }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 2 }}
                    key={plan.name}
                    className={`border border-solid rounded-lg p-8 w-full sm:w-80 md:w-1/3 shadow-lg transition-transform transform hover:scale-105 ${selectedPlan === plan.name ? 'ring-4 ring-purple-500' : ''} 
                      ${selectedPlan === plan.name ? 'shadow-xl' : 'shadow-md'} hover:shadow-xl`}
                    onClick={() => handlePlanSelect(plan.name)} // Handle plan selection
                >
                    <div className={`${plan.backgroundColor} text-white p-4 rounded-t-lg text-center`}>
                        <Typography variant="h5" component="div" className="font-semibold">
                            {plan.name}
                        </Typography>
                    </div>
                    <div className="p-6 text-center border-b text-gray-700">
                        <Typography variant="h6">{plan.price}</Typography>
                    </div>
                    <div className="py-2 text-center  text-gray-600">
                        <ul className="list-none">
                            <li>{plan.storage}</li>
                            <li>{plan.Accounts}</li>
                            <li>{plan.Access}</li>
                            <li>{plan.Coucelling}</li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <Button
                            variant="contained"
                            color="primary"
                            className={`w-full ${plan.buttonColor} text-white py-3 px-6 rounded-full`}

                        ><Link to="/signup" >
                                Sign Up
                            </Link>
                        </Button>
                    </div>
                </motion.div>

            ))
            }
            /</div>
    );
}

export default LandingPagePrice;
