"use client"

import { useRouter } from "next/navigation"
import { SafeListings, SafeUser } from "../types"
import Container from "../components/Container"
import Heading from "../components/Heading"
import ListingCard from "../components/listings/ListingCard"

interface FavoritesClientProps{
    listings: SafeListings[]
    currentUser: SafeUser | null
}

const FavoritesClient: React.FC<FavoritesClientProps> = ({
    listings,
    currentUser
}) => {

    const router = useRouter();

    return(
        <Container>
            <Heading
                title="Favourites"
                subtitle="List of places you have favourited!"
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            ">
                {listings.map((listing) => (
                    <ListingCard
                        currentUser={currentUser}
                        key={listing.id}
                        data={listing}
                    />
                ))}
            </div>
        </Container>
    )
}

export default FavoritesClient