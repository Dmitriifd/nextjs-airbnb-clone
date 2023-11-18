'use client';

import { useMemo } from 'react';

import { SafeListing, SafeReservation, SafeUser } from '@/app/types';

import Container from '@/app/components/Container';
import { categories } from '@/app/components/navbar/Categories';
import ListingHead from '@/app/components/listings/ListingHead';

interface ListingClientProps {
  reservations?: SafeReservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
  listing,
  reservations = [],
  currentUser,
}) => {

  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div
        className='
          max-w-screen-lg
          mx-auto
        '
      >
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
