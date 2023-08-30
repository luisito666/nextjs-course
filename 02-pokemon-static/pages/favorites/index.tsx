import { Layout } from "@/components/layouts";
import { NextPage } from "next";

interface FavoritosProps {

}

const FavoritosHome: NextPage<FavoritosProps> = () => {
    return (
        <Layout title="Favoritos">
            <h1>Favoritos</h1>

        </Layout>
    )
}

export default FavoritosHome
