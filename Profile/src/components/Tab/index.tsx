import { useEffect, useState } from "react";
import * as S from "./style";
import { TabContent } from "./TabContent";
import { TabNavItem } from "./TabNavItem";
import { Carousel2 } from "../Slider";
import { UseWindowSize } from "../../hooks/useWidthSize";
import { CookingPot, Dog, Leaf, Star } from "@phosphor-icons/react";
export function Tabs() {
  const [activeTab, setActiveTab] = useState("tab1");

  useEffect(() =>{
    
  },[])

  const [width] = UseWindowSize();
  const isMobile = width <= 550;


  return (
    <S.Container>
      <S.Nav>
        <TabNavItem
          icon={
            isMobile ? <Dog size={32} color="#84bd00" weight="fill" /> : null
          }
          title={!isMobile ? "Animal" : ""}
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon={
            isMobile ? <Star size={32} color="#84bd00" weight="fill" /> : null
          }
          title={!isMobile ? "Céu" : ""}
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon={
            isMobile ? (
              <CookingPot size={32} color="#84bd00" weight="fill" />
            ) : null
          }
          title={!isMobile ? "Gastronomia" : ""}
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          icon={
            isMobile ? <Leaf size={32} color="#84bd00" weight="fill" /> : null
          }
          title={!isMobile ? "Natureza" : ""}
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </S.Nav>
      <S.Outlet>
        <TabContent id="tab1" activeTab={activeTab}>
          <Carousel2 type="animal" />
        </TabContent>
        <TabContent id="tab2" activeTab={activeTab}>
          <Carousel2 />
        </TabContent>
        <TabContent id="tab3" activeTab={activeTab}>
          <Carousel2 />
        </TabContent>
        <TabContent id="tab4" activeTab={activeTab}>
          <Carousel2 type="nature" />
        </TabContent>
      </S.Outlet>
    </S.Container>
  );
}
