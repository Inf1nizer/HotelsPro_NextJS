import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListing from "../actions/getFavoriteListing";
import FavoritesClient from "./FavoritesClient";

const ListingPage = async() => {

    const listings = await getFavoriteListing();
    const currentUser = await getCurrentUser();

    if(listings.length == 0)
    {
        return(
            <ClientOnly>
                <EmptyState
                    title="No Favorites found"
                    subtitle="Looks like you dont have any favorite listings"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

}

export default ListingPage