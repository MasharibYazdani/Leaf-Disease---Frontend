import React from "react";

function Prediction({ prediction }) {
  const pred = () => {
    switch (prediction) {
      case "Corn_(maize)___healthy":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Corn</h1>
            <h2 className="font-bold">This is healthy plant 😊</h2>
          </div>
        );

      case "Potato___healthy":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Potato</h1>
            <h2 className="font-bold">This is healthy plant 😊</h2>
          </div>
        );

      case "Rice_healthy":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">This is healthy plant 😊</h2>
          </div>
        );

      // case "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot":
      //   return (
      //     <div>
      //       <h1 className="font-extrabold">Plant : Corn</h1>
      //       <h2 className="font-bold">
      //         Disease : Cercopora leaf spot Gray leaf spot
      //       </h2>
      //       <h2 className="font-semibold">
      //         Steps to follow to cure the disease :
      //       </h2>
      //     </div>
      //   );

      case "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Corn</h1>
            <h2 className="font-bold">
              Disease : Cercopora leaf spot Gray leaf spot
            </h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Isolate Infected Plants: Identify and isolate plants showing
              symptoms of Cercospora leaf spot to prevent the spread of the
              disease to healthy plants. <br />
              2. Remove Infected Leaves: Carefully remove and destroy the leaves
              exhibiting characteristic gray or tan lesions with dark margins.
              Dispose of the infected plant material to prevent further spread.{" "}
              <br />
              3. Apply Fungicides: Consider applying fungicides labeled for
              Cercospora leaf spot control if the disease is widespread and
              severe. Follow the recommended application rates and timings
              provided on the product label.
              <br />
              4. Adjust Irrigation: Modify irrigation practices to minimize leaf
              wetness periods, as moisture promotes disease development. Avoid
              overhead irrigation and ensure proper drainage to reduce humidity
              levels. <br />
              5. Promote Air Circulation: Improve air circulation around the
              plants by spacing them adequately and removing excess foliage.
              This helps reduce humidity levels and create an unfavorable
              environment for fungal growth.
              <br />
              6. Monitor Weather Conditions: Keep an eye on weather conditions,
              especially periods of warm and humid weather, which favor
              Cercospora leaf spot development. Adjust management practices
              accordingly to minimize disease pressure.
              <br />
              7. Practice Crop Rotation: Rotate maize crops with non-host plants
              to break the disease cycle and reduce pathogen buildup in the
              soil. Avoid planting maize in the same area consecutively.
              <br />
              8. Enhance Plant Nutrition: Maintain proper plant nutrition to
              promote plant vigor and resilience against diseases. Ensure
              balanced fertilization and address any nutrient deficiencies
              promptly. <br />
              9. Prune Infected Areas: Prune and remove infected plant parts,
              such as leaves and stems, to improve air circulation and reduce
              disease pressure.
            </p>
          </div>
        );

      case "Corn_(maize)___Common_rust_":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Corn</h1>
            <h2 className="font-bold">Disease : Common Rust</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Inspect Your Corn: Take a close look at your corn plants to
              check for signs of common rust, such as reddish-brown spots on the
              leaves. <br />
              2. Remove Affected Plants: If you find any plants with common
              rust, remove them from your field right away. This helps stop the
              disease from spreading to other plants. <br />
              3. Consider Using Fungicides: If the common rust is widespread and
              threatening your crop, you might need to use special sprays called
              fungicides to help control it. Talk to an expert to figure out the
              best way to use them. <br />
              4. Keep an Eye on the Weather: Pay attention to the weather,
              especially if it's warm and wet, because that can make common rust
              spread faster. Adjust your plans accordingly. <br />
              5. Learn and Share: Share what you know about dealing with common
              rust with other farmers. Keeping each other informed can help
              everyone manage the disease better.
            </p>
          </div>
        );

      case "Corn_(maize)___Northern_Leaf_Blight":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Corn</h1>
            <h2 className="font-bold">Disease : Northern Leaf Blight</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Field Inspection: Regularly check corn plants for symptoms like
              cigar-shaped lesions on leaves, which are indicative of Northern
              Leaf Blight. <br />
              2. Remove Infected Plants: Pull out and discard any corn plants
              showing signs of the disease to prevent further spread. <br />
              3. Apply Fungicides: Consider using fungicides if the disease is
              widespread and severe. Follow recommended guidelines for
              application. <br />
              4. Crop Rotation: Rotate corn with non-host crops to disrupt the
              disease cycle. <br />
              5. Maintain Plant Health: Implement practices that promote plant
              vigor, such as balanced fertilization and adequate irrigation.{" "}
              <br />
              6. Monitor Weather: Be vigilant during periods of high humidity,
              as they promote disease development. <br />
              7. Keep Records: Document disease incidence and management actions
              to evaluate effectiveness and inform future decisions. By taking
              these steps, farmers can effectively manage Northern Leaf Blight
              and minimize its impact on corn crops.
            </p>
          </div>
        );

      case "Potato___Early_blight":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Potato</h1>
            <h2 className="font-bold">Disease : Early Blight</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Plant Inspection: Regularly inspect potato plants for symptoms
              such as dark lesions with concentric rings on lower leaves, which
              indicate Early blight. <br />
              2. Remove Infected Leaves: Remove and destroy any leaves showing
              signs of the disease to prevent further spread. <br />
              3. Apply Fungicides: Consider applying fungicides labeled for
              Early blight control if the disease is widespread and severe.
              Follow recommended application rates and timings. <br />
              4. Maintain Crop Health: Implement cultural practices that promote
              plant vigor, such as proper irrigation and fertilization. <br />
              5. Crop Rotation: Rotate potato crops with non-host plants to
              break the disease cycle and reduce pathogen buildup in the soil.{" "}
              <br />
              6. Weed Control: Keep the area around potato plants free of weeds,
              as they can harbor the disease and contribute to its spread.{" "}
              <br />
              7. Monitor Weather Conditions: Be aware of weather conditions that
              favor Early blight development, such as warm and humid conditions.
              Adjust management practices accordingly.
            </p>
          </div>
        );

      case "Potato___Late_blight":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Potato</h1>
            <h2 className="font-bold">Disease : Late Blight</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Plant Inspection: Regularly inspect potato plants for symptoms
              such as dark lesions with concentric rings on lower leaves, which
              indicate Early blight. <br />
              2. Remove Infected Leaves: Remove and destroy any leaves showing
              signs of the disease to prevent further spread. <br />
              3. Apply Fungicides: Consider applying fungicides labeled for
              Early blight control if the disease is widespread and severe.
              Follow recommended application rates and timings. <br />
              4. Maintain Crop Health: Implement cultural practices that promote
              plant vigor, such as proper irrigation and fertilization. <br />
              5. Crop Rotation: Rotate potato crops with non-host plants to
              break the disease cycle and reduce pathogen buildup in the soil.{" "}
              <br />
              6. Weed Control: Keep the area around potato plants free of weeds,
              as they can harbor the disease and contribute to its spread.{" "}
              <br />
              7. Monitor Weather Conditions: Be aware of weather conditions that
              favor Early blight development, such as warm and humid conditions.
              Adjust management practices accordingly.
            </p>
          </div>
        );

      case "Rice_bacterial_leaf_blight":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">Disease : Bacterial Leaf Blight</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Plant Inspection: Regularly inspect rice plants for symptoms
              such as water-soaked lesions with yellow halos on leaves, which
              indicate bacterial leaf blight. <br />
              2. Remove Infected Leaves: Remove and destroy any leaves showing
              signs of the disease to prevent further spread.
              <br />
              3. Apply Copper-based Fungicides: Consider using copper-based
              fungicides labeled for bacterial diseases if the disease is
              widespread and severe. Follow recommended application rates and
              timings. <br />
              4. Drain Fields: Ensure proper drainage in rice fields to minimize
              standing water, which can promote disease development.
              <br />
              5. Maintain Crop Health: Implement cultural practices that promote
              plant vigor, such as balanced fertilization and proper water
              management.
              <br />
              6. Crop Rotation: Rotate rice crops with non-host plants to break
              the disease cycle and reduce pathogen buildup in the soil. <br />
              7. Monitor Weather Conditions: Be aware of weather conditions that
              favor bacterial leaf blight development, such as warm and humid
              conditions. Adjust management practices accordingly.
            </p>
          </div>
        );

      case "Rice_brown_spot":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">Disease : Brown Spot</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Plant Inspection: Regularly inspect rice plants for symptoms
              such as small, circular, brown lesions on leaves, which indicate
              brown spot disease. <br />
              2. Remove Infected Leaves: Remove and destroy any leaves showing
              signs of the disease to prevent further spread.
              <br />
              3. Apply Fungicides: Consider using fungicides labeled for brown
              spot control if the disease is widespread and severe. Follow
              recommended application rates and timings.
              <br />
              4. Adjust Water Management: Adjust irrigation practices to
              minimize leaf wetness periods, as moisture promotes disease
              development. <br />
              5. Crop Rotation: Rotate rice crops with non-host plants to break
              the disease cycle and reduce pathogen buildup in the soil. <br />
              6. Maintain Plant Health: Implement cultural practices that
              promote plant vigor, such as proper fertilization and weed
              control. <br />
              7. Monitor Weather Conditions: Be aware of weather conditions that
              favor brown spot development, such as warm and humid conditions.
              Adjust management practices accordingly.
            </p>
          </div>
        );

      case "Rice_leaf_blast":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">Disease : Leaf Blast</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Apply Fungicides: Use fungicides labeled for blast disease
              control to suppress the spread of the pathogen. Apply the
              fungicides according to the recommended dosage and timing provided
              on the product label. <br />
              2. Adjust Irrigation: Modify irrigation practices to reduce leaf
              wetness periods, as moisture promotes disease development. Ensure
              proper drainage to avoid waterlogging, which can exacerbate the
              disease. <br />
              3. Remove Infected Plant Material: Prune and remove infected plant
              parts, such as leaves and panicles, to prevent further spread of
              the disease within the crop and to neighboring plants.
              <br />
              4. Promote Air Circulation: Improve air circulation within the
              crop canopy by spacing plants adequately and removing excess
              foliage. This helps reduce humidity levels, creating an
              unfavorable environment for disease development.
              <br />
              5. Implement Crop Rotation: Rotate rice crops with non-host plants
              to break the disease cycle and reduce the buildup of pathogen
              inoculum in the soil. Avoid planting rice in the same field
              consecutively to minimize disease pressure.
              <br />
              6. Monitor Weather Conditions: Stay vigilant for weather
              conditions that favor disease development, such as warm and humid
              conditions. Adjust management practices accordingly and be
              prepared to apply fungicides preventively during periods of high
              disease risk. <br />
              7. Use Resistant Varieties: Consider planting rice varieties that
              are resistant or tolerant to leaf blast disease. Consult with
              agricultural extension services or local experts to identify
              suitable resistant varieties for your region. <br />
              8. Practice Integrated Disease Management: Adopt integrated
              disease management strategies that combine cultural, biological,
              and chemical control methods to effectively manage leaf blast
              disease while minimizing environmental impact and production
              costs.
            </p>
          </div>
        );

      case "Rice_leaf_scald":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">Disease : Leaf Scald</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Plant Inspection: Regularly inspect rice plants for symptoms
              such as elongated, yellow to reddish-brown lesions on leaves,
              which indicate leaf scald disease. <br />
              2. Remove Infected Leaves: Remove and destroy any leaves showing
              signs of the disease to prevent further spread. <br />
              3. Apply Fungicides: Consider using fungicides labeled for leaf
              scald control if the disease is widespread and severe. Follow
              recommended application rates and timings. <br />
              4. Adjust Irrigation: Modify irrigation practices to minimize leaf
              wetness periods, as moisture promotes disease development. Ensure
              proper drainage to avoid waterlogging, which can exacerbate the
              disease.
              <br />
              5. Crop Rotation: Rotate rice crops with non-host plants to break
              the disease cycle and reduce pathogen buildup in the soil. <br />
              6. Maintain Plant Health: Implement cultural practices that
              promote plant vigor, such as proper fertilization and weed
              control. <br />
              7. Monitor Weather Conditions: Be aware of weather conditions that
              favor leaf scald development, such as warm and humid conditions.
              Adjust management practices accordingly.
            </p>
          </div>
        );

      case "Rice_narrow_brown_spot":
        return (
          <div>
            <h1 className="font-extrabold">Plant : Rice</h1>
            <h2 className="font-bold">Disease : Narrow Brown Spot</h2>
            <h2 className="font-semibold">
              Steps to follow to cure the disease :
            </h2>
            <p>
              1. Isolate Affected Plants: Identify and mark the plants showing
              symptoms of the disease. Isolate them from healthy plants to
              prevent further spread. <br />
              2. Remove Infected Tissue: Carefully remove and destroy the
              infected plant parts, such as leaves, stems, or fruits. Use
              sanitized pruning tools to avoid spreading the pathogen to other
              plants. <br />
              3. Sanitize Equipment: Disinfect any gardening tools or equipment
              that came into contact with the infected plants to prevent
              cross-contamination. Use a solution of bleach or alcohol for
              effective sterilization.
              <br />
              4. Apply Treatment: Depending on the severity of the disease and
              its susceptibility to treatment, consider applying appropriate
              fungicides, bactericides, or other control measures recommended by
              agricultural experts. Follow the application instructions
              carefully. <br />
              5. Monitor Surrounding Plants: Regularly monitor nearby plants for
              symptoms of the disease. If additional plants show signs of
              infection, repeat the steps above to contain and manage the
              spread. <br />
              6. Implement Preventive Measures: Take preventive measures to
              reduce the risk of disease recurrence in the future. These
              measures may include improving plant hygiene, optimizing growing
              conditions, practicing crop rotation, and selecting
              disease-resistant varieties.
            </p>
          </div>
        );
      default:
        return <p>Please upload leaf image</p>;
    }
  };

  return (
    <div className="container flex justify-around mx-auto m-10 p-6 border border-gray-500 bg-green-700 rounded-lg shadow-lg text-white">
      {/* {if (prediction === "Corn_(maize)___healthy"){
        <p>This is healthy </p>
      }
    } */}
      {pred()}
    </div>
  );
}

export default Prediction;
