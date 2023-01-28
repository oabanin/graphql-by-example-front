import {useQuery} from "@apollo/client";
import {GET_JOBS} from "../../queries";
import {Fragment} from "react";

const Jobs = () => {
    const {data} = useQuery(GET_JOBS);
    const companies = data?.companies || [];
    return (
        <>
            <div style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)"}}>
                <div>Name</div>
                <div>Description</div>
                {companies.map((item: any) => {
                    return (
                        <Fragment key={item.id}>
                            <div> {item.name}</div>
                            <div>{item.description}</div>
                        </Fragment>
                    );
                })}
            </div>
        </>
    );
};

export default Jobs;