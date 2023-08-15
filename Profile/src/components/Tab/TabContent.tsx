import { ReactNode } from "react";

interface PropsTab {
    id: string;
    activeTab: string;
    children: ReactNode
  }

export function TabContent ({id, activeTab, children}: PropsTab ) {
    return (
      activeTab === id ? <div className="TabContent">
        { children }
      </div>
      : null
    );
   };