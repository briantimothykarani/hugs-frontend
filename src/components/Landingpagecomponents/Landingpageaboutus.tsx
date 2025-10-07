
import { Card, CardContent, Typography } from '@mui/material';
import { MessageSquare, HelpingHand, WorkflowIcon } from 'lucide-react';

function LandingPageAboutUs() {
    const features = [
        {
            title: 'Peer Chat',
            description: 'Secure and anonymous chats with fellow students,Where you can share your troubles without discrimination',
            icon: <MessageSquare className="text-purple-600 w-12 h-12" />
        },
        {
            title: 'Self-Help Tools',
            description: 'Guided journaling, breathing, and resilience exercises.',
            icon: <WorkflowIcon className="text-blue-600 w-12 h-12" />
        },
        {
            title: 'Counseling Access',
            description: 'Connect with professionals via your institution,or even from other colleges',
            icon: <HelpingHand className="text-purple-600 w-12 h-12" />
        }
    ];

    return (
        <div className="bg-white text-gray-800 py-20 px-6">
            <div className="flex flex-wrap justify-around">
                {features.map((feature, index) => (
                    <Card key={index} className="w-full sm:w-80 md:w-1/3 mb-6 shadow-lg rounded-lg">
                        <CardContent className="text-center">
                            {feature.icon}
                            <Typography variant="h6" className="font-semibold mt-4">{feature.title}</Typography>
                            <Typography variant="body2" color="textSecondary" className="mt-2">{feature.description}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default LandingPageAboutUs;