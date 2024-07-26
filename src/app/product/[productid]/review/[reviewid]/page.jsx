import { notFound } from "next/navigation"

const reviewID = ({ params }) => {
    const id = parseInt(params.reviewid)
    if (id > 10) {
        notFound();
    }

    return (
        <div>
            Product {params.productid} review id is {params.reviewid}
        </div>
    )
}

export default reviewID 