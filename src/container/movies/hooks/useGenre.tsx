import { useEffect, useState } from "react";
import API from "@/service/api";

interface Genre {
    id: number;
    name: string;
}

export default function useGenre() {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await API.get("/genre/movie/list");
                setGenres(response.data.genres);
            } catch (error) {
                console.error("Failed to fetch genres:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGenres();
    }, []);

    return { genres, loading };
}
