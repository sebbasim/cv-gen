# CV-gen

A CV generator built with Svelte. 

## Getting Started

1. Clone this repo 
```
git clone https://github.com/sebbasim/cv-generator.git
```
2. Move into directory 
```
cd cv-generator
```
3. Install npm dependencies 
```
npm install
```
4. Run local instance
```
npm run dev
```
5. Change content in ```data.json```

## What is CV-gen?

CV-gen is a CV generator being built with Svelte. 
The pre 1.0.0 versions allow users to change styling and content in a .json file, while the 1.0.0 version will also include an easy to use drag-and-drop interface. 

## Global styling rules 

```data.json``` contains a style object in which you can specify the global styling rules. 
More options will be available in future versions. 
- ```main_color```
Specifies the color for the job title, institution and icons. 
Is used directly in CSS, so you can specify any valid color value, such as grey, #d49114, rgb(128, 80, 200), and so on. 
- ```font_family```
- ```header_1```
    - ```font_size```
    - ```underline: boolean```
- ```column_widths```
E.g. ```[0.6, 0.4]```
Specifies the width for the left and right column respectively.

## List of components

- ```component_title``` is equal to the component names found in the table below, all in lowercase. E.g. header.
- Icons can be found at [Font Awesome](https://fontawesome.com/).
- Place your picture in /public/assets/your-image.jpg and link accordingly. 
- Column field can be either ```left``` or ```right```. 
- ```Institution```, ```start_date```, ```end_date``` and ```location``` are optional.
- A ```level``` can be a number between 1 - 5.
- The Dynamic component allows for a component with a dynamic ```title``` and any number of ```entries```.

<table>
    <tr>
        <th>Component</th>
        <th>Fields</th>
    </tr>
    <tr>
        <td>Header</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>name</li>
                <li>job_title</li>
                <li>image</li>
                <li>information
                    <ul>
                        <li>text</li>
                        <li>icon</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Summary</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>column</li>
                <li>bullet_points
                    <ul>
                        <li>text</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Dynamic</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>title</li>
                <li>column</li>
                <li>entries
                    <ul>
                        <li>title</li>
                        <li>institution</li>
                        <li>start_date</li>
                        <li>end_date</li>
                        <li>location</li>
                        <li>bullet_points<ul>
                                <li>text</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Languages</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>column</li>
                <li>level_entries
                    <ul>
                        <li>name</li>
                        <li>level</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Strengths</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>column</li>
                <li>entries
                    <ul>
                        <li>title</li>
                        <li>icon</li>
                        <li>description</li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Projects</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>column</li>
                <li>entries
                    <ul>
                        <li>title</li>
                        <li>bullet_points<ul>
                                <li>text</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>Skills</td>
        <td>
            <ul>
                <li>component_title</li>
                <li>column</li>
                <li>level_groups
                    <ul>
                        <li>group</li>
                        <li>level_entries<ul>
                                <li>name</li>
                                <li>level</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </td>
    </tr>
    <tr>
</table>

## Example CV

- 2 page CV example 
- PDF includes page break
- Experience, Education and Volunteering are dynamic components

![2 page CV example!](https://sebastiaansimons.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FJ8ti5jGT4gFovqu0yUDO%2Fuploads%2FVGlNDguel1oG6xlWlZ0O%2Ffull%20cv%20example.png?alt=media&token=ac8a7ff6-e0c5-46f7-9a01-de13580ed332)
