import { useState } from "react";
import "./Accordion.module.css";

const items = [
  {
    id: 1,
    title: "Історія",
    content: "Тут буде інформація про історію.",
  },
  {
    id: 2,
    title: "Місія",
    content: "Тут буде опис місії.",
  },
  {
    id: 3,
    title: "Команда",
    content: "Тут буде інформація про команду.",
  },
  {
    id: 4,
    title: "Контакти",
    content: "Тут будуть контактні дані.",
  },
];

export default function Accordion() {
  return (
    <div className="accordion">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>

        <span className="accordion-icon">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
