# ActionEngine v0.8.1 Documentation

## Introduction to ActionEngine v0.8.1

Welcome to ActionEngine v0.8.1! This version builds on our robust workflow automation tool, enhancing its functionality with key updates and integrations. We've focused on refining existing features and introducing new capabilities to provide a more efficient and versatile experience. Let’s explore what this version offers.

## Features of v0.8.1

### Comprehensive Workflow Management
- **Load and Store Workflows:** Efficiently manage various workflows, loading and storing them as needed for different tasks.
- **Event-Based Plugin Execution:** Seamlessly integrate a variety of plugins into your workflows using an event-based mechanism, ensuring a dynamic and responsive automation process.

### Advanced Parameter Mapping
- **Enhanced Parameter Handling:** Improved `mapParamsForAction` method now more accurately handles nested references, ensuring that parameters passed through workflows are correctly interpreted and utilized.

### Powerful Plugin Integration
- **HttpService Plugin:** Continue to take advantage of the HttpService plugin for handling HTTP requests, an essential tool for web-based interactions.
- **GptManager Plugin:** Utilize the GptManager plugin for advanced content generation and text processing with GPT models.
- **ActionFs Plugin:** The ActionFs plugin provides capabilities for direct file operations, such as creating, reading, updating, or deleting files within workflows.
- **Regex Plugin Integration:** Newly integrated Regex plugin allows for sophisticated text manipulation, enhancing your workflows with pattern matching, text replacement, and removal functionalities.

### Enhanced Data Processing
- **Regex-Powered Text Manipulation:** Utilize regular expressions for advanced text processing tasks, improving the handling of text data within your automated workflows.

## Getting Started with v0.8.1

1. **Setup and Installation:**
   - Ensure Node.js is installed on your system.
   - Download and install ActionEngine v0.8.1.

2. **Configuring Workflows:**
   - Explore the `config-ae-0-8-1.js` file to set up your workflows, integrating various plugins as per your requirements.

3. **Plugin Integration:**
   - Add and configure plugins like Log, Math, HttpService, GptManager, ActionFs, and Regex, tailoring them to your workflow needs.

4. **Executing Workflows:**
   - Run ActionEngine to see your customized workflows in action, leveraging the enhanced parameter mapping and Regex functionalities.

### Example Command to Start Using ActionEngine v0.8.1:

```bash
git clone -b actionEngine-0-8-1 --single-branch https://gitlab.com/bronzwik/dotinaction.git ActionEngine
cd ActionEngine/versions/ae0-8-1
node app-ae-0-8-1.js
```

## Need Help?

If you need assistance or have questions:
- **User Manual:** Our user manual provides detailed instructions and helpful examples.
- **Support:** Our support team is ready to assist you through various channels.

## Future Updates

Stay tuned for future releases of ActionEngine! We're committed to continuous improvement, adding new features, and enhancing existing functionalities.

Thank you for choosing ActionEngine v0.8.1! We are excited to see how you utilize the full range of features to streamline and enhance your automated workflows.

---

