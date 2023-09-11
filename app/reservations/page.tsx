import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";
import ReservationClient from "./ReservationsClient";

const ReservationsPage = async() => {
    const currentUser = await getCurrentUser();
    if(!currentUser){
        return(
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please Log-In"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        authorId: currentUser.id
    });

    if(reservations.length == 0){
        return(
            <ClientOnly>
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you dont have any reservations in your property"
                />
            </ClientOnly>
        )
    }

    return(
        <ClientOnly>
            <ReservationClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )

};

export default ReservationsPage;