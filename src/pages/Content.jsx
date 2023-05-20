import { useParams } from "react-router-dom";
import { Content } from "../components";
import { yearService } from "../service";
import { useEffect, useState } from "react";

const ContentView = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});

  const getDetails = (id) => {
    yearService
      .getYearsContent(id)
      .then((res) => {
        setDetails(res.data.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => getDetails(id), [id]);

  console.log(details);

  return <Content key={details.id} {...details} />;
};

export default ContentView;
