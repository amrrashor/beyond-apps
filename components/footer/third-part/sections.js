//data
import Data from './data';
//styled components
import { SingleColumn } from '../index.styled';

export const Company = () => {
    return (
        <>
            {Data.map(d => (
                <SingleColumn>
                    <h6>Our Company</h6>
                    <div>
                        {d.company.map(dd => (
                            <p key={dd.id}>{dd.title }</p>
                        ))}
                    </div>
                </SingleColumn>
            ))}
        </>
    )
}

export const Connect = () => {
    return (
        <>
            {Data.map(d => (
                <SingleColumn>
                    <h6>Connect</h6>
                    <div>
                        {d.connect.map(dd => (
                            <p key={dd.id}>{dd.title }</p>
                        ))}
                    </div>
                </SingleColumn>
            ))}
        </>
    )
}

export const Product = () => {
    return (
        <>
            {Data.map(d => (
                <SingleColumn>
                    <h6>Product</h6>
                    <div>
                        {d.product.map(dd => (
                            <p key={dd.id}>{dd.title }</p>
                        ))}
                    </div>
                </SingleColumn>
            ))}
        </>
    )
}

export const Trust = () => {
    return (
        <>
            {Data.map(d => (
                <SingleColumn>
                    <h6>Trust Center</h6>
                    <div>
                        {d.trust.map(dd => (
                            <p key={dd.id}>{dd.title }</p>
                        ))}
                    </div>
                </SingleColumn>
            ))}
        </>
    )
}