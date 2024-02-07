
export default function Item(ItemComp){
    return (
        <div>
            <ul>
                <li>{ItemComp.name}</li>
                <li>Buy {ItemComp.quantity} in {ItemComp.category}</li>
            </ul>
        </div>
    );
}
