
import "react-multi-carousel/lib/styles.css";
import React, { Fragment } from "react";
import Section from "./subcomponents/Section";
import Simple from "./subcomponents/Simple";




// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const MobileMenuField = ({ deviceType, products }: { deviceType: string | undefined, products: IProduct[] }) => (
  <Fragment>
    <Section>
      <Simple deviceType={deviceType} products={products} />
    </Section>
  </Fragment>
);
export default MobileMenuField;
