import PropTypes from 'prop-types'

export default function Card({ image, title, description, price, location, additionalInfo, className }) {
    return (
        <div className={`max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-all duration-300 ${className}`}>
            {/* Card Image */}
            {image && (
                <div className="relative h-48 overflow-hidden">
                    <img 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                        src={image} 
                        alt={title} 
                    />
                </div>
            )}
            
            {/* Card Content */}
            <div className="p-6">
                {/* Title */}
                {title && (
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{title}</h3>
                )}
                
                {/* Description */}
                {description && (
                    <p className="text-gray-600 text-sm mb-4">{description}</p>
                )}
                
                {/* Price */}
                {price && (
                    <p className="text-cream font-bold text-lg mb-2">
                        Rp {typeof price === 'number' ? price.toLocaleString('id-ID') : price}
                    </p>
                )}
                
                {/* Location */}
                {location && (
                    <div className="flex items-center text-gray-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-sm">{location}</p>
                    </div>
                )}

                {/* Additional Info */}
                {additionalInfo && (
                    <div className="mt-2 text-sm text-gray-500">
                        {additionalInfo}
                    </div>
                )}
            </div>
        </div>
    )
}

// Props validation
Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    location: PropTypes.string,
    additionalInfo: PropTypes.node,
    className: PropTypes.string
}