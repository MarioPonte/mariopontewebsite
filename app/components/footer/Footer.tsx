import { format } from 'date-fns';
import Container from "../Container";

export const Footer = () => {
    const year = new Date();
    return (
        <div className="sticky top-[100vh] text-center bg-indigo-800 py-4">
            <div className="">
                <Container>
                    <div className="">
                        <div className="text-xs">
                            &copy; Todos os direitos reservados a Mário Ponte: Soluções Digitais - {format(year, "yyyy")}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}