
import './Card.css';

export default function Card ({imageSrc, imageAlt}){
    return(
        <div className="card-selected" data-testid="card">
            
            <img src={imageSrc} alt={imageAlt}/>
            
       </div>
    )
}