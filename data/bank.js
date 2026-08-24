/* ------------------------------------------------------------------
   Shared assessment question bank.
   Used by BOTH pre-assessment.html and post-assessment.html so the
   30 knowledge items are guaranteed identical. Edit here only.
   a = index of the correct option (0-based).
   ------------------------------------------------------------------ */

const BANK = {
A: [
 {q:"A shop owner says her chatbot 'learned' that customers want cheaper items. What would have to be true for that claim to hold?",
  o:["The chatbot was given examples of past customer behaviour and found a pattern in them","The chatbot read the shop's website","The chatbot is a large language model","Somebody told the chatbot that customers want cheaper items"],a:0},
 {q:"A large language model confidently gives you a court case citation that does not exist. The most accurate description of what happened is:",
  o:["The model was hacked","The model produced text that fits the pattern of a citation without checking that it is real","The model's training data has expired","The model deliberately misled you"],a:1},
 {q:"Which of these is the clearest example of narrow AI rather than general intelligence?",
  o:["A system that reads X-rays for one specific condition","A person using several apps at once","A computer with a very fast processor","A robot with arms and legs"],a:0},
 {q:"Your prompt returns a weak answer. Which change is most likely to improve it?",
  o:["Ask the same question again in a louder tone","Give the model the context, the audience, the format you want, and an example","Use more technical vocabulary","Ask it to try harder"],a:1},
 {q:"You paste a client's full contract into a public AI chatbot to summarise it. The main risk is:",
  o:["The summary will be too long","You may have disclosed confidential information outside your organisation's control","The model will refuse","Nothing, chatbots are private by default"],a:1},
 {q:"'Training data' means:",
  o:["The instructions you type into the chatbot","The examples the model learned patterns from before you ever used it","The model's answers to previous users","Data stored on your device"],a:1},
 {q:"Which task is generative AI genuinely well suited to today?",
  o:["Producing a first draft that a knowledgeable person will then check and correct","Making a final legal decision with no human review","Guaranteeing factual accuracy without sources","Replacing all judgement in hiring"],a:0},
 {q:"A recruitment model trained on ten years of a company's hiring decisions mostly recommends men. The most likely explanation is:",
  o:["The algorithm is faulty and needs reinstalling","The model has reproduced a pattern that was already in the historical data","Men applied more recently","The model was not trained long enough"],a:1},
 {q:"What does it mean for an AI system to be 'open weight'?",
  o:["It is free to use on a website","The trained model parameters can be downloaded and run by anyone","It has no safety restrictions","It was trained on public data only"],a:1},
 {q:"You want AI to answer questions using your own organisation's documents. The most appropriate approach is:",
  o:["Retrieve the relevant documents and give them to the model alongside the question","Ask the model to remember them next time","Train a model from scratch","Paste all documents into every single prompt forever"],a:0}
],
B: [
 {q:"A dataset of 500 loan customers has an average income of ₦180,000 and a median of ₦95,000. This tells you:",
  o:["The data was entered wrongly","A small number of very high incomes are pulling the average up","Most customers earn ₦180,000","The median is the wrong measure here"],a:1},
 {q:"Ice cream sales and drowning deaths rise together every year. The correct conclusion is:",
  o:["Ice cream causes drowning","Drowning causes ice cream sales","Both rise with a third factor, hot weather","The data must be wrong"],a:2},
 {q:"You survey people who answered your online form about internet quality. The clearest weakness is:",
  o:["The sample size","People without good internet are less likely to have answered","The questions were too long","You did not use a spreadsheet"],a:1},
 {q:"In a spreadsheet of 10,000 sales rows, the fastest reliable way to see total sales by state is:",
  o:["Read every row","A pivot table or a GROUP BY query","Sort by state and count manually","Sample the first 100 rows"],a:1},
 {q:"A column labelled 'date' contains 12/03/2026, 3 December 2026 and 2026-03-12. Before analysis you must:",
  o:["Delete the ambiguous rows","Standardise the format and resolve which convention each source used","Sort the column","Nothing, software handles it"],a:1},
 {q:"'The campaign increased sales by 40%.' The single most important missing piece of information is:",
  o:["The colour of the advert","What sales did over the same period without the campaign","The name of the agency","The total budget"],a:1},
 {q:"Which SQL clause filters rows before any grouping happens?",
  o:["HAVING","WHERE","ORDER BY","SELECT"],a:1},
 {q:"You have customer records with names, phone numbers and addresses, and you want to share the file with an external analyst. The right first step is:",
  o:["Password-protect the file and send it","Remove or mask the fields that identify individuals and confirm you have a lawful basis to share","Convert it to PDF","Send only the first 100 rows"],a:1},
 {q:"A dashboard shows a sharp drop in orders on 1 October every year. Before raising an alarm you should check:",
  o:["Whether the server was upgraded","Whether it is a public holiday","The colour scheme of the chart","Whether the data is in a spreadsheet"],a:1},
 {q:"'Statistically significant' most nearly means:",
  o:["The result is large and important","The result is unlikely to be explained by chance alone","The result is certain","The sample was large"],a:1}
],
C: [
 {q:"You want to predict whether a customer will repay a loan. This is:",
  o:["A classification problem","A clustering problem","A regression problem","Not a machine learning problem"],a:0},
 {q:"Predicting next month's revenue in naira is:",
  o:["Classification","Regression","Clustering","Reinforcement learning"],a:1},
 {q:"Grouping 40,000 customers into segments when you have no labels is:",
  o:["Supervised learning","Unsupervised learning","Fine-tuning","Feature engineering"],a:1},
 {q:"Your model scores 99% on the data it was trained on and 61% on new data. The most likely diagnosis is:",
  o:["The model is excellent","The model has overfitted the training data","The new data is broken","The model needs more layers"],a:1},
 {q:"Why is a separate test set held back and never used during training?",
  o:["To save computing time","To get an honest estimate of performance on data the model has never seen","Because the software requires it","To reduce file size"],a:1},
 {q:"A fraud model must catch fraud in a dataset where 1 in 500 transactions is fraudulent. A model that predicts 'not fraud' every time scores 99.8% accuracy. This shows that:",
  o:["The model is excellent","Accuracy is the wrong measure for rare events; precision and recall matter more","The dataset is too small","Fraud detection is impossible"],a:1},
 {q:"'Feature engineering' means:",
  o:["Adding new features to the software product","Turning raw data into the input variables a model can actually learn from","Choosing which algorithm to use","Tuning the model's settings"],a:1},
 {q:"A model that performed well in January performs badly in July, with no code change. The most likely cause is:",
  o:["The code degraded","The real-world data has shifted away from what the model was trained on","The server is slow","The model was deleted"],a:1},
 {q:"Fine-tuning an existing open model, rather than training a new one, is usually chosen because:",
  o:["It is more accurate in every case","It needs far less data, compute and time to adapt a model to your specific task","It removes the need for evaluation","It makes the model open source"],a:1},
 {q:"The step most often skipped and most often regretted when putting a model into real use is:",
  o:["Choosing a logo","Deciding in advance how you will monitor it and what would make you switch it off","Buying a faster laptop","Publishing a blog post"],a:1}
],
D: [
 {q:"What does this print?\n\nx = [1, 2, 3]\nprint(len(x))",
  o:["3","[1, 2, 3]","2","An error"],a:0},
 {q:"Which line correctly defines a function that returns twice its input?",
  o:["def double(n): return n * 2","function double(n) { return n*2 }","def double(n) => n*2","double = n * 2"],a:0},
 {q:"You have a pandas DataFrame df. Which gives the first five rows?",
  o:["df.first(5)","df.head()","df.top(5)","df.rows(5)"],a:1},
 {q:"What does this print?\n\ntotal = 0\nfor n in range(4):\n    total += n\nprint(total)",
  o:["4","6","10","0"],a:1},
 {q:"In scikit-learn, the method that trains a model on data is:",
  o:["model.run()","model.fit(X, y)","model.train(X, y)","model.learn(X, y)"],a:1},
 {q:"Your script raises KeyError: 'age'. The most likely cause is:",
  o:["Python is not installed","There is no column or key called 'age' in the object you indexed","The file is too large","You need a faster computer"],a:1}
]
};

const SCALE5 = ["Not at all","A little","Somewhat","Quite a lot","A great deal"];
const FREQ5 = ["Never","A few times a year","Monthly","Weekly","Daily"];

const E_QUESTIONS = [
 {id:"e_freq", q:"How often do you currently use an AI tool for real work or business tasks?", type:"scale", opts:FREQ5},
 {id:"e_conf_explain", q:"How confident are you explaining to a colleague what machine learning is and where it fails?", type:"scale", opts:SCALE5},
 {id:"e_conf_data", q:"How confident are you analysing a dataset and drawing a defensible conclusion from it?", type:"scale", opts:SCALE5},
 {id:"e_conf_build", q:"How confident are you building something that uses AI, even a small thing?", type:"scale", opts:SCALE5},
 {id:"e_conf_judge", q:"How confident are you judging whether an AI output is trustworthy enough to act on?", type:"scale", opts:SCALE5},
 {id:"e_applied", q:"In the last three months, have you changed how you do a work task because of AI?", type:"radio", opts:["No","Once or twice","Several times","It has changed how I work day to day"]},
 {id:"e_income", q:"Has AI contributed to any income, contract, promotion or new client for you so far?", type:"radio", opts:["No","Indirectly","Yes, a small amount","Yes, meaningfully"]},
 {id:"e_taught", q:"Have you taught or shown anyone else how to use an AI tool?", type:"radio", opts:["No","One or two people","A few people","Regularly, as part of what I do"]},
 {id:"e_barrier", q:"What is most likely to stop you finishing this programme?", type:"radio", opts:["Data cost or connectivity","Time — work and family","The material being too difficult","Losing motivation without a group","Nothing I can foresee"]},
 {id:"e_goal", q:"What do you most want to be able to do by 31 October? One or two sentences.", type:"text"},
 {id:"e_problem", q:"Name one real problem in your work, business or community that you think AI could help with. This becomes your capstone.", type:"text"}
];

