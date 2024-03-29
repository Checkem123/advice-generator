import { useState, useEffect } from "react";
import { Advice, adviceSchema } from "../api/types";
const url = "https://api.adviceslip.com/advice";

type AvicesProps = {
    clicked: boolean;
};
const Advices = ({ clicked }: AvicesProps): JSX.Element => {
    const [advice, setAdvice] = useState<Advice>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState<string | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(url, { cache: "no-store" });
            if (!response.ok) {
                throw new Error(`Failed to fetch advice...`);
            }
            const rawData: Advice = await response.json();
            const result = adviceSchema.safeParse(rawData);

            if (!result.success) {
                console.log(result.error.message);
                throw new Error(`Failed to parse advice`);
            }
            setAdvice(result.data);
        } catch (error) {
            const message =
                error instanceof Error
                    ? error.message
                    : "there was an error...";
            setIsError(message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [clicked]);

    if (isLoading) {
        return <h3>Loading...</h3>;
    }
    if (isError) {
        return <h3>Error {isError}</h3>;
    }

    return (
        <>
            <h2>Advice #{advice?.slip.id}</h2>
            <p>
                <q>{advice?.slip.advice}</q>
            </p>
        </>
    );
};

export default Advices;
