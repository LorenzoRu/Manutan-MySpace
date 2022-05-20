import Depenses from "../components/charts/Chart";

export default function General() {
    return (
        <section>
            <div className="expences" style={{width: '50vw'}}>
                Évolution des dépenses en k€
                <Depenses/>
            </div>
        </section>
    )
}