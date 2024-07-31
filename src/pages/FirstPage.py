import streamlit as st
from datetime import datetime

# Crop stages data
crop_stages = {
    "गेहूं (Wheat)": [
        {"stage": "  1 : अंकुरण और बीज स्थापना |   बीज अंकुरित होता है, जड़ें विकसित होती हैं, और अंकुर उभरते हैं।", "days": [7, 21]},
        {"stage": "  2 : tillering  |   पौधे के आधार पर नई shoots निकलती हैं।", "days": [21, 45]},
        {"stage": "  3 : तना का बढ़ना और जुड़ना   |   तना लंबा होता है और गांठें विकसित होती हैं।", "days": [45, 60]},
        {"stage": "  4 : Booting & Heading   |   बीज का सिरा सबसे ऊपरी पत्ती की म्यान के अंदर विकसित होता है और फिर निकलता है।", "days": [60, 90]},
        {"stage": "  5 : फूलना और परागण  |  गेहूं के फूल खिलते हैं और परागण होता है।", "days": [90, 100]},
        {"stage": "  6 : दाने का भरना  |  गिरी विकसित होती हैं और स्टार्च से भर जाती हैं।", "days": [100, 120]},
        {"stage": "  7 : पकना   |  गिरी सख्त हो जाती हैं और सूख जाती हैं।", "days": [120, 130]},
        {"stage": "  8 : कटाई   |  गिरी परिपक्वता तक पहुँच जाती हैं और कटाई के लिए तैयार हो जाती हैं।", "days": [130, 2000]},
    ],
    "मक्का (Corn)": [
        {"stage": "  1 : अंकुरण और निकलना  |  बीज अंकुरित होता है, जड़ें विकसित होती हैं, और अंकुर मिट्टी के ऊपर निकलता है।", "days": [7, 14]},
        {"stage": "  2 : वानस्पतिक वृद्धि   |  पत्तियां और डंठल तेजी से बढ़ते हैं।", "days": [14, 60]},
        {"stage": "  3 : Tasseling & Silking |  Tassel (نر फूल) और Silks (मादा फूल) निकलते हैं।", "days": [60, 80]},
        {"stage": "  4 : ब्लास्टर अवस्था   |  दाने तरल से भरे हुए फफोले का विकास करना शुरू करते हैं।", "days": [80, 90]},
        {"stage": "  5 : दूधिया अवस्था  |  दाने दूधिया तरल से भर जाते हैं।", "days": [90, 100]},
        {"stage": "  6 : आटा अवस्था   |  दाने सख्त हो जाते हैं और आटे जैसे बन जाते हैं।", "days": [100, 110]},
        {"stage": "  7 : Dent अवस्था  |  Dent किनारे पर दाना के शीर्ष पर बनता है (केवल Dent मक्का किस्में)।", "days": [110, 120]},
        {"stage": "  8 : शारीरिक परिपक्वता   |   दाने सूखे वजन तक पहुँच जाते हैं और कटाई के लिए तैयार हो जाते हैं।", "days": [120, 2000]},
    ],
    "कपास (Cotton)": [
        {"stage": "  1 : अंकुरण और पौधा निकलना (Germination & Emergence)  बीज अंकुरित होता है, जड़ें विकसित होती हैं, और पौधा मिट्टी के ऊपर निकलता है।", "days": [7, 14]},
        {"stage": "  2 : प्रारंभिक वानस्पतिक वृद्धि (Early Vegetative Growth)  पत्तियां और तना तेजी से बढ़ते हैं। पौधा जड़ प्रणाली को मजबूत करता है।", "days": [14,30]},
        {"stage": "  3 : मध्य वानस्पतिक वृद्धि (Mid-Vegetative Growth)  पौधा तेजी से बढ़ता है, अधिक शाखाएं निकलती हैं।", "days": [30,45]},
        {"stage": "  4 : स्क्वेरिंग (Squaring)  पौधे पर फूलों की छोटी कलियां (स्क्वेयर) बनने लगती हैं।", "days": [45,60]},
        {"stage": "  5 : फूलना और परागण (Flowering & Pollination)	स्क्वेयर खुलकर कपास के पीले फूल बन जाते हैं। परागण होता है।", "days": [60,70]},
        {"stage": "  6 : बॉल (Boll) विकास	फूल के स्थान पर रुई के रेशों के साथ कपास की बॉल का विकास होता है।", "days": [70,80]},
        {"stage": "  7 : बॉल का विकास और परिपक्वता (Boll Development & Maturation)	बॉल का आकार बढ़ता है, रुई के रेशे मजबूत और लंबे होते हैं।", "days": [80,100]},
        {"stage": "  8 : बॉल का खुलना (Boll Splitting)	रुई की बॉल सूख जाती है और खुलने लगती है, जिससे रुई काटने के लिए तैयार हो जाती है।", "days": [100,1200]},
    ],
    "धान (Rice)":[
        {"stage": "  1 : अंकुरण और रोपाई स्थापना (Germination & Seeding Establishment)	बीज अंकुरित होता है, जड़ें विकसित होती हैं, और रोपाई खेत में स्थापित हो जाती है।", "days": [14,30]},
        {"stage": "  2 : tillering	पौधे के आधार पर नए प्ररोह निकलते हैं, जिससे पौधा झाड़ीदार हो जाता है।", "days": [30,60]},
        {"stage": "  3 : प्रारंभिक वानस्पतिक वृद्धि (Early Vegetative Growth)	पत्तियां तेजी से बढ़ती हैं और पौधा मजबूत होता है।", "days": [60,70]},
        {"stage": "  4 : मध्य वानस्पतिक वृद्धि (Mid-Vegetative Growth)	पत्तियां अधिकतम आकार तक पहुंचती हैं और पौधा परिपक्व होता है।", "days": [70,90]},
        {"stage": "  5 : धान का फूलना (Panicle Emergence)	धान का फूल (धान का गुच्छा) पत्तियों के ऊपर दिखाई देता है।", "days": [90,100]},
        {"stage": "  6 : फूलना और परागण (Flowering & Pollination)	धान के फूल खिलते हैं और परागण होता है।", "days": [100,110]},
        {"stage": "  7 : दाना भरना (Grain Filling)	धान के दाने (चावल के दाने) विकसित होते हैं और स्टार्च से भर जाते हैं।", "days": [110,130]},
        {"stage": "  8 : पकना (Ripening)	धान के दाने सुनहरे हो जाते हैं और कटाई के लिए तैयार हो जाते हैं।", "days": [130,2000]},
    ]
        # Add stages for rice as needed

}


color_code="#000000"


# Function to calculate current stage
def calculate_stage(selected_crop, planting_date):
    current_date = datetime.now().date()
    days_since_planting = (current_date - planting_date).days
    stages = crop_stages[selected_crop]
    # st.write(f"रोपण के बाद के दिन : {days_since_planting}")

    display_output_in_box2(f"<span style='color:{color_code}'><b>रोपण के बाद के दिन : {days_since_planting}</b></span>")
    
    # f"<span style='color:{color_code}'>{text}</span>"
    
    for stage in stages:
        if stage["days"][0] <= days_since_planting <= stage["days"][1]:
            return stage["stage"]
    return "Unknown"

  
# color_code="#000000"


# Define a function to display output in a styled box
def display_output_in_box(output_text):
    box_style = """
        border-radius: 5px;
        background-color: #00FF00;
        padding: 20px;
        margin-bottom: 20px;
        font-size: 18px;
    """
    formatted_text = f"<div style='{box_style}'>{output_text}</div>"
    st.markdown(formatted_text, unsafe_allow_html=True)



def display_output_in_box2(output_text):
    box_style = """
        border-radius: 5px;
        background-color: #00FF00;
        padding: 20px;
        margin-bottom: 20px;
        font-size: 18px;
    """
    formatted_text = f"<div style='{box_style}'>{output_text}</div>"
    st.markdown(formatted_text, unsafe_allow_html=True)




# Streamlit app
# st.title("वर्तमान चरण")
# Streamlit app
st.markdown("<div style='text-align:center'><h1>वर्तमान चरण</h1></div>", unsafe_allow_html=True)
 

# Crop selection
selected_crop = st.selectbox("फसल चुने ", ["गेहूं (Wheat)", "मक्का (Corn)", "कपास (Cotton)","धान (Rice)"])

# Planting date input
planting_date = st.date_input("बुवाई की तारीख")

# Calculate current stage
current_stage = calculate_stage(selected_crop, planting_date)

# Display current stage in a styled box
display_output_in_box(f"<span style='color:{color_code}'><b>वर्तमान चरण  </b>{current_stage}</span>")





# st.subheader("प्रगति बार")
# st.markdown("<h4>प्रगति बार</h4>", unsafe_allow_html=True)


# Define stages
stages = crop_stages[selected_crop]

# Find current stage index
current_stage_index = None
for i, stage in enumerate(stages):
    if stage["stage"] == current_stage:
        current_stage_index = i
        break

if current_stage_index is not None:
    # Calculate progress
    progress = (current_stage_index + 1) / len(stages)


    st.markdown(f"<h4>प्रगति: {int(progress * 100)}%</h4>", unsafe_allow_html=True)

    st.progress(progress)
    
    st.markdown("<h4 style='text-align: center;'>सभी चरणों के चित्र</h4>", unsafe_allow_html=True)

    st.write("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
# Display the image below the progress bar
    st.image("abc.png", use_column_width=True)

    # # Celebrate completed stages
    # Adjust the effect and size of balloons