import Accordion from "@/components/accordion/accordion";

const About = () => {
    return (
        <div className="mx-auto p-4 mt-20">
            <Accordion title="Birinchi bo'lim" defaultOpen={true}>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cupiditate enim eum ipsa
                    optio reiciendis repellendus saepe sed tempora?
                </p>
            </Accordion>
            <Accordion title="Ikkinchi bo'lim" className="mt-4">
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque cupiditate enim eum ipsa
                    optio reiciendis repellendus saepe sed tempora? Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Error, nisi, totam. Adipisci alias aperiam commodi cum cumque ducimus eos eveniet fugit harum
                    illum ipsa officiis perspiciatis porro quam quasi reiciendis sed tempora tenetur, ut veritatis. Ab,
                </p>
            </Accordion>
        </div>
    );
};

export default About;