
import { Card, CardContent, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

function LandingPageTestimonials() {
    const testimonials = [
        {
            name: "John McKenzie",
            message: "What a useful website, it really helped me get psychological help at my lowest moment, in college which was when I got my first heartbreak.",
            avatar: "https://via.placeholder.com/150"
        },
        {
            name: "Paula Wairimu",
            message: "Hi, I'm Paula Wairimu from Harvard School of Law, I 100% recommend this website to any university or college student. You should group students into schools to form a community in the future.",
            avatar: "https://via.placeholder.com/150"
        },
        {
            name: "Susan Walter",
            message: "Very good website with a real-world use, very good job.",
            avatar: "https://via.placeholder.com/150"
        },
        {
            name: "Alex Santos",
            message: "Hi, I'm Alex from the University of Mexico. Your website helped me a lot at my lowest in sophomore year.",
            avatar: "https://via.placeholder.com/150"
        }
    ];

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, rotateX: "90deg" }}
                whileInView={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap justify-around p-8 cursor-pointer hover:shadow-purple-700">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="w-full sm:w-80 md:w-1/3 mb-6 shadow-lg rounded-lg">
                        <Avatar src={testimonial.avatar} className="mx-auto mt-4" />
                        <CardContent className="text-center">
                            <Typography variant="h6" className="font-semibold">{testimonial.name}</Typography>
                            <Typography variant="body2" color="textSecondary" className="mt-2">{testimonial.message}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </motion.div>

        </div>
    )
}

export default LandingPageTestimonials