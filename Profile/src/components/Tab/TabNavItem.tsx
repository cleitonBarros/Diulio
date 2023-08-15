interface Props {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  icon?: any
}

export function TabNavItem({ icon,id, title, activeTab, setActiveTab }: Props) {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {icon}{title}
    </li>
  );
}
