import { useParams } from "react-router-dom";

export default function CategoryPage() {
    const id = useParams().id;
    return (
        <>
            <h1>Category {id}</h1>
        </>
    );
}
