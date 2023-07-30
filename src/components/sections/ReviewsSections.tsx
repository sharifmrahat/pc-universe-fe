/* eslint-disable @next/next/no-img-element */
import { IReview } from "@/types/product";
import {
  ExclamationTriangleIcon,
  StarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";

type ReviewsSectionProps = {
  reviews: IReview[];
};

const Reviews = ({ reviews }: ReviewsSectionProps) => {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex flex-row justify-between items-center pt-10 pb-2 border-b border-b-slate-300">
        <h2 className="text-xl lg:text-2xl font-bold text-primary w-fit">
          Reviews
        </h2>
        {session?.user && (
          <div className="w-fit">
            <button className="border-2 border-secondary rounded text-primary flex justify-center items-center gap-2 font-semibold px-4 py-1">
              <StarIcon className="w-4 h-4" />
              <p>Write Review</p>
            </button>
          </div>
        )}
      </div>
      {reviews?.length ? (
        <div className="mb-10 my-5 ">
          {reviews?.map((review: IReview, idx: number) => (
            <div
              key={idx}
              className="bg-white shadow p-4 rounded flex flex-col mb-5"
            >
              <div className="grid grid-flow-col justify-start items-start gap-4">
                <div>
                  {review?.user?.photoUrl ? (
                    <img
                      src={review?.user?.photoUrl}
                      className="w-12 h-12 rounded-full"
                      alt=""
                    />
                  ) : (
                    <UserCircleIcon className="w-12 h-12 rounded-full text-slate-500" />
                  )}
                </div>
                <div className="flex flex-col gap-1 justify-between items-start">
                  <p className="text-primary_dark font-semibold">
                    {review?.user?.name || "Anonymous"}
                  </p>
                  <p className="text-slate-600 w-fit">{review?.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-md bg-yellow-50 p-4 w-fit mx-auto">
          <div className="flex">
            <div className="flex-shrink-0">
              <ExclamationTriangleIcon
                className="h-5 w-5 text-yellow-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Not Review Found!
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
