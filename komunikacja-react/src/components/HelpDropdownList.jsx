import React, { useState } from 'react';

function HelpDropdownList() {
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

let exampleText = <p className='contentText'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos consequuntur sed fugit, porro consequatur eos sunt quas eius accusamus iste expedita sequi aut neque, numquam harum cumque repellat unde maxime natus. Sunt qui, consequatur, nulla eos possimus itaque maxime et quisquam id labore minima est deserunt, velit suscipit fugit molestiae rerum adipisci dolore eius! Consequatur accusantium quae, ad ipsum ducimus neque. Mollitia vitae, aliquid odio aut nam ullam temporibus voluptas in! Omnis magni debitis esse, enim qui quae dolorum reiciendis in minima et blanditiis facere ex sapiente, deleniti nihil natus non aut, nostrum repellendus illum ab sed. Voluptatem, nobis quia! </p>;



  const sections = [    
    {name: 'Użytkownik',      
    options: [        
        { 
            name: 'Opcja 1',          
            descriptions: [exampleText]
        },
        {
          name: 'Opcja 2',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 3',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 4',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 5',
          descriptions: [exampleText]
        }
      ]
    },
    {name: 'Administrator',      
    options: [        
        { 
            name: 'Opcja 1',          
            descriptions: [exampleText]
        },
        {
          name: 'Opcja 2',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 3',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 4',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 5',
          descriptions: [exampleText]
        }
      ]
    },
    {name: 'Kierowca',      
    options: [        
        { 
            name: 'Opcja 1',          
            descriptions: [exampleText]
        },
        {
          name: 'Opcja 2',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 3',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 4',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 5',
          descriptions: [exampleText]
        }
      ]
    },
    {name: 'Dyspozytor',      
    options: [        
        { 
            name: 'Opcja 1',          
            descriptions: [exampleText]
        },
        {
          name: 'Opcja 2',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 3',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 4',
          descriptions: [exampleText]
        },
        {
          name: 'Opcja 5',
          descriptions: [exampleText]
        }
      ]
    }
];

const handleSelectSection = (sectionName) => {
    if (selectedSection === sectionName) {
      setSelectedSection(null);
    } else {
      setSelectedOption(null);
      setSelectedSection(sectionName);
    }
  };
  
  const handleSelectOption = (optionName) => {
    if (selectedOption === optionName) {
      setSelectedOption(null);
    } else {
      setSelectedOption(optionName);
    }
  };
  

return (
    <div>
      {sections.map((section) => (
        <div className='dropdownContainer' key={section.name}>
          <h3 className='dropdownTitle' onClick={() => handleSelectSection(section.name)}>
            {section.name}
          </h3>
          {selectedSection === section.name &&
            section.options.map((option) => (
              <div className='dropdownOptionsContainer' key={option.name}>
                <p className='dropdownOptionsName' onClick={() => handleSelectOption(option.name)}>
                  {option.name}
                </p>
                {selectedOption === option.name && (
                  <ul className='dropdownDescriptions'>
                    {option.descriptions.map((description) => (
                      <li key={description}>{description}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );

}
    export default HelpDropdownList;
