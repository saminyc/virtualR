import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
const Pricing = () => {
		return (
				<div className="mt-20 border">
					<h2 className="text-3xl
					sm:text-5xl lg:text-6xl text-center

					">Pricing</h2>
					<div className="flex flex-wrap">
						{
						pricingOptions.map((option,idx)=>(
						<div key={idx} className="w-full sm:w-1/2 lg:w-1/3 p-2">
								<div className="border p-10 border-neutral-700 rounded-xl">
									<p>{option.title}</p>
								</div>
								<div>
									<p>{option.price}</p>
								</div>
							</div>
						))
						
						}
					</div>
				</div>
		)
}

export default Pricing