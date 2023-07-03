import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useMeasure } from "react-use-measure";

const Glossary = () => {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  return <div></div>;
};

export default Glossary;
