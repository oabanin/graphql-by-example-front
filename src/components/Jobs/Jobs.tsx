import {useQuery} from "@apollo/client";
import {Fragment} from "react";
import {Job} from "../../gql/graphql";
import {JOBS_QUERY} from "../../graphql/queries";


const Jobs = () => {
    const {data, error} = useQuery<{ jobs: Job[] }>(JOBS_QUERY);
    if (error) return <>{error.message}</>;
    const jobs = data?.jobs || [];
    return (
        <>
            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
                <div>Title</div>
                <div>Description</div>
                <div>Company Name</div>
                {jobs.map((item) => {
                    return (
                        <Fragment key={item.id}>
                            <div> {item.title}</div>
                            <div>{item.description}</div>
                            <div>{item.company?.name}</div>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
};

export default Jobs;