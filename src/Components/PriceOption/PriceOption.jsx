import Options from "./Options";
const PriceOption = () => {
  const priceoptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Fitness classes (limited)"
      ],
      "price": "$29.99/month"
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "features": [
        "Full gym access",
        "Access to all fitness classes",
        "Personal trainer consultation (1 session/month)",
        "Sauna and steam room access"
      ],
      "price": "$49.99/month"
    },
    {
      "id": 3,
      "name": "Family Membership",
      "features": [
        "Access for 2 adults and 2 children",
        "Full gym access",
        "Access to all fitness classes",
        "Kids' play area",
        "Swimming pool access"
      ],
      "price": "$79.99/month"
    },
    {
      "id": 4,
      "name": "Student Membership",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Fitness classes (limited)",
        "Valid student ID required"
      ],
      "price": "$19.99/month"
    },
    {
      "id": 5,
      "name": "Senior Membership",
      "features": [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker room access",
        "Senior fitness classes",
        "Ages 60+ only"
      ],
      "price": "$24.99/month"
    }
  ];
  
  return (
    <div>
      <h2>Best prices in the town</h2>
      {
        priceoptions.map(option => <Options key={option.id} option={option} />)
      }
    </div>
  );
};

export default PriceOption;