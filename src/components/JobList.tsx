import { Link } from 'react-router-dom';
import {Job} from "../gql/graphql";

function JobItem({ job }:{job: Job}) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
      </div>
    </li>
  );
}

function JobList({ jobs }:{jobs: Job[]}) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
