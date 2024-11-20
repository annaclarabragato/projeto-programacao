import { useEffect, useState } from "react";
import { CategoryService } from "../../services/category-service";
import { ICategory } from "../../@libs/types";
import Section from "../../components/Section";
import PopularSection from "../../components/PopularSection";

function HomePage() {

    const [categories, setCategories] = useState<ICategory[]>([]);

    useEffect(() => {
        CategoryService.getAll()
            .then(result => {
                console.log('=>', result)
                setCategories(result.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, []);

    return (
        <main
        style = {{
            marginTop: '8rem',
            display: 'flex',
            justifyItems: 'center',
          }}
        >
            <PopularSection />
            <div>
            {
                categories.map(item => (
                    <Section key={item.id} category={item} />
                ))
            }
</div>
        </main >
    )
}

export default HomePage;