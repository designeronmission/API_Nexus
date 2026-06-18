  // Get the button element
  const topButton = document.getElementById("backToTopBtn");

  // When the user scrolls down 300px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  // Smooth scroll back to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


     // Execution Runtime Global Variables Config Array Dictionary States
        const configurationSystemState = {
            activeTheme: "dark",
            activePersona: "dev",
            activeStack: "node",
            activeCategory: "email"
        };

        // Static Copy Templates Matrix Core
        const personaVisualCopyBlockDataset = {
            dev: {
                left: `<div style="display: flex; flex-direction: column; gap: 16px;">
                        <span class="badge-pill-micro" style="align-self: flex-start;">Standardizing Implementation Architecture</span>
                        <h4 style="font-size: 24px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">Stop Writing Custom Integration Adapters Every Quarter</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Software engineers waste up to 35% of core implementation sprints building structural custom webhooks, normalizing data payload formatting anomalies, and debugging raw response codes across mismatched vendor SDK updates. ApiNexus aggregates these layers into a single immutable specification contract loop mapping system.</p>
                       </div>`,
                right: `<div style="background-color: var(--bg-surface-tertiary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--text-primary); overflow-x: auto;">
                            <div><span class="syntax-comment">// Instantiate application orchestrator safely with unified token parameters</span></div>
                            <div><span class="syntax-keyword">const</span> ApiNexusNode = <span class="syntax-func">require</span>(<span class="syntax-string">'@apinexus/enterprise-core'</span>);</div>
                            <div><span class="syntax-keyword">const</span> gatewayClient = <span class="syntax-keyword">new</span> <span class="syntax-func">ApiNexusNode</span>({ credentialToken: <span class="syntax-string">"nexus_live_v2"</span> });</div>
                            <br>
                            <div><span class="syntax-keyword">const</span> trackingOutput = <span class="syntax-keyword">await</span> gatewayClient.<span class="syntax-func">dispatchQuery</span>({</div>
                            <div>  domainClass: <span class="syntax-string">"payments"</span>,</div>
                            <div>  targetEngine: <span class="syntax-string">"stripe"</span>,</div>
                            <div>  payloadContext: { totalCents: <span class="syntax-var">9500</span>, isoCurrency: <span class="syntax-string">"usd"</span> }</div>
                            <div>});</div>
                        </div>`
            },
            pm: {
                left: `<div style="display: flex; flex-direction: column; gap: 16px;">
                        <span class="badge-pill-micro" style="align-self: flex-start; color: var(--accent-success); background-color: rgba(16,185,129,0.12);">Optimizing Sprints & Margins</span>
                        <h4 style="font-size: 24px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">Accelerate Time-to-Market Vectors without Engineering Drag</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Strategic business agility scales down instantly when migrations dictate cross-contract evaluations, lengthy multi-vendor procurement reviews, and fragile application integration cycles. ApiNexus creates full structural validation redundancy parity arrays on day one.</p>
                       </div>`,
                right: `<div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; display: flex; flex-direction: column; gap: 16px;">
                            <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--text-primary);">Quarterly Operational System Overhead Savings Tracking Map</div>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; font-size: 11px;"><span style="color: var(--text-secondary)">Engineering Backlog Reductions</span><span style="color: var(--accent-success); font-weight: 700; font-family: 'JetBrains Mono'">+18 Sprints Saved</span></div>
                                <div style="background-color: var(--bg-surface-tertiary); height: 6px; border-radius: 3px; overflow: hidden;"><div style="background-color: var(--accent-success); width: 88%; height: 100%;"></div></div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; font-size: 11px;"><span style="color: var(--text-secondary)">Multi-Region High Availability Failover Parity</span><span style="color: var(--brand-primary); font-weight: 700; font-family: 'JetBrains Mono'">100% Active Active</span></div>
                                <div style="background-color: var(--bg-surface-tertiary); height: 6px; border-radius: 3px; overflow: hidden;"><div style="background-color: var(--brand-primary); width: 100%; height: 100%;"></div></div>
                            </div>
                            <div style="background-color: var(--bg-surface-tertiary); padding: 12px; border-radius: 6px; font-size: 11px; color: var(--text-secondary); border-left: 3px solid var(--brand-primary)">
                                <i class="fa-solid fa-circle-info" style="color: var(--brand-primary); margin-right: 6px;"></i> Active Protocol Rule: If SendGrid API service availability drops beneath 99.95%, operational traffic flows dynamically auto-reroute to Postmark proxies.
                            </div>
                        </div>`
            }
        };

        // Fully Populated 21 Third-Party Integration Vector Mapping Dictionary Dataset
        const databaseServiceProvidersRegistry = {
            email: ["sendgrid", "postmark", "mailgun"],
            messaging: ["twilio", "sinch", "infobip"],
            payments: ["stripe", "paypal", "adyen"],
            banking: ["plaid", "tink", "yodlee"],
            crm: ["hubspot", "salesforce", "zoho crm"],
            ai: ["openai", "anthropic", "cohere"],
            cloud: ["aws core", "google cloud", "digitalocean"]
        };

        // Handcrafted Core Structural Code Snippets Formatting Parameters
        const matrixCodeBlueprintsDataset = {
            node: {
                email: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Triggering standardized abstraction single-token transmission parameter routing templates\nclientInstance.email.sendHTML({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  targetRecipient: "customer_entity@domain.com",\n  subjectHeader: "Transaction Context Validation Pipeline Sync Run",\n  htmlContainerElement: "&lt;h1&gt;System Payload Structural Mapping Verified Pass&lt;/h1&gt;"\n}).then(res =&gt; console.log(res));`,
                messaging: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Relaying multi-region packet strings via global gateway proxies cleanly\nclientInstance.messaging.dispatchWhatsapp({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  destinationNumber: "+15559821102",\n  bodyStringPayload: "System dynamic lifecycle security updates validation hash verification link."\n}).then(res =&gt; console.log(res));`,
                payments: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Executing ledger transaction loops under isolated security environment protocols\nclientInstance.payments.processCharge({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  totalCentsAmount: 9500,\n  isoCurrencyCode: "usd",\n  tokenizedCardRef: "tok_secure_network_payment_string"\n}).then(res =&gt; console.log(res));`,
                banking: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Sweeping open banking verification account data structures via single token keys\nclientInstance.banking.fetchLedgerStatements({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  targetAccountRefId: "acc_99a8_vault_node_sync",\n  calendarPeriodFilter: "2026-Q2"\n}).then(res =&gt; console.log(res));`,
                crm: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Synchronizing real-time customer pipeline attributes inside underlying CRM arrays\nclientInstance.crm.reconcileLeadRecord({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  entityAccountEmail: "lead_prospect@company.org",\n  attributesMappingTree: { currentTier: "Enterprise Plus Matrix", status: "Active_Closed" }\n}).then(res =&gt; console.log(res));`,
                ai: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Routing system variables safely across modern dynamic unified LLM inference arrays\nclientInstance.ai.compilePromptCompletion({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  instructModelProfile: "instruct-model-v6-stable",\n  promptQueryString: "Parse and aggregate incoming metadata log telemetry properties."\n}).then(res =&gt; console.log(res));`,
                cloud: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Provisioning object block file containers across decentralized cloud clusters\nclientInstance.cloud.instantiateBucket({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  bucketIdentiferTag: "nexus-production-storage-node-04",\n  hardwareDataZoneRegion: "us-west-primary-isolated"\n}).then(res =&gt; console.log(res));`
            },
            python: {
                email: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\n# Instantiate core python runtime wrapper leveraging single master secure token properties\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nemail_pipeline_status = gateway_client.email.send_html(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    recipient_address="customer_entity@domain.com",\n    subject_header="Transaction Context Validation Pipeline Sync Run",\n    html_body_markup="&lt;h1&gt;System Payload Structural Mapping Verified Pass&lt;/h1&gt;"\n)\nprint(email_pipeline_status)`,
                messaging: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nmessage_relay_data = gateway_client.messaging.dispatch_whatsapp(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    to_phone_number="+15559821102",\n    body_payload_string="System dynamic lifecycle security updates validation hash verification link."\n)\nprint(message_relay_data)`,
                payments: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nledger_transaction_receipt = gateway_client.payments.process_charge(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    amount_cents=9500,\n    currency_iso_code="usd",\n    source_token_ref="tok_secure_network_payment_string"\n)\nprint(ledger_transaction_receipt)`,
                banking: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nbanking_ledger_extract = gateway_client.banking.fetch_ledger_statements(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    account_reference_id="acc_99a8_vault_node_sync",\n    calendar_period_filter="2026-Q2"\n)\nprint(banking_ledger_extract)`,
                crm: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\ncrm_reconciliation_output = gateway_client.crm.reconcile_lead_record(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    account_email_key="lead_prospect@company.org",\n    attributes_payload_dict={"currentTier": "Enterprise Plus Matrix", "status": "Active_Closed"}\n)\nprint(crm_reconciliation_output)`,
                ai: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nneural_model_completion = gateway_client.ai.compile_prompt_completion(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    model_profile_string="instruct-model-v6-stable",\n    query_prompt_text="Parse and aggregate incoming metadata log telemetry properties."\n)\nprint(neural_model_completion)`,
                cloud: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\ncloud_bucket_object_receipt = gateway_client.cloud.instantiate_bucket(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    bucket_tag_id="nexus-production-storage-node-04",\n    data_region_zone_specification="us-west-primary-isolated"\n)\nprint(cloud_bucket_object_receipt)`
            }
        };

        // UI Light/Dark Custom Controller Module Logic
        const masterThemeBtn = document.getElementById('masterThemeBtn');
        const themeIconSlot = document.getElementById('themeIconSlot');
        const themeLabelText = document.getElementById('themeLabelText');
        const htmlNodeTagElement = document.documentElement;

        masterThemeBtn.addEventListener('click', () => {
            if (configurationSystemState.activeTheme === "dark") {
                configurationSystemState.activeTheme = "light";
                htmlNodeTagElement.setAttribute('data-theme', 'light');
                themeIconSlot.className = "fa-solid fa-sun";
                themeLabelText.textContent = "Light Laboratory Mode";
            } else {
                configurationSystemState.activeTheme = "dark";
                htmlNodeTagElement.setAttribute('data-theme', 'dark');
                themeIconSlot.className = "fa-solid fa-moon";
                themeLabelText.textContent = "Dark Mode";
            }
        });

        // Target Persona Toggle Rendering Engine Loops
        const devBtn = document.getElementById('personaDevBtn');
        const pmBtn = document.getElementById('personaPmBtn');
        const gridViewSlot = document.getElementById('personaDisplayGrid');

        function drawTargetPersonaLayoutView(personaKey) {
            configurationSystemState.activePersona = personaKey;
            const targetCopyDataset = personaVisualCopyBlockDataset[personaKey];
            gridViewSlot.innerHTML = targetCopyDataset.left + targetCopyDataset.right;
            
            if (personaKey === 'dev') {
                devBtn.classList.add('active');
                pmBtn.classList.remove('active');
            } else {
                pmBtn.classList.add('active');
                devBtn.classList.remove('active');
            }
        }
        devBtn.addEventListener('click', () => drawTargetPersonaLayoutView('dev'));
        pmBtn.addEventListener('click', () => drawTargetPersonaLayoutView('pm'));

        // Laboratory Testing Console Framework Control Core Systems Elements
        const routeSelectField = document.getElementById('routeSelectField');
        const downstreamDropdownField = document.getElementById('downstreamDropdownField');
        const volSlider = document.getElementById('volSimulationSlider');
        const sliderLabel = document.getElementById('sliderValueText');
        const codeCanvas = document.getElementById('codePayloadCanvas');
        const terminalLogs = document.getElementById('telemetryTerminalLogs');

        function rebuildDropdownOptionsArrayDeck(categoryKey) {
            const approvedVendorsList = databaseServiceProvidersRegistry[categoryKey];
            downstreamDropdownField.innerHTML = "";
            
            approvedVendorsList.forEach((vendor) => {
                const opt = document.createElement('option');
                opt.value = vendor;
                opt.textContent = ` Proxy Tunnel Router Source Edge ── ${vendor}`;
                downstreamDropdownField.appendChild(opt);
            });
            syncTerminalCodeDisplayCanvas();
        }

        function syncTerminalCodeDisplayCanvas() {
            const pickedCategory = routeSelectField.value;
            const activeStack = configurationSystemState.activeStack;
            const pickedVendor = downstreamDropdownField.value || "unknown";
            
            let sourceStringTemplate = matrixCodeBlueprintsDataset[activeStack][pickedCategory];
            sourceStringTemplate = sourceStringTemplate.replace("{{PROVIDER}}", pickedVendor);
            
            codeCanvas.innerHTML = sourceStringTemplate;
            document.getElementById('extensionLabelSlot').textContent = activeStack === 'node' ? 'nexus_core.js' : 'nexus_core.py';
        }

        function updateActiveStackSlot(stackKey) {
            configurationSystemState.activeStack = stackKey;
            const btnNode = document.getElementById('stackBtnNode');
            const btnPy = document.getElementById('stackBtnPy');
            
            if (stackKey === 'node') {
                btnNode.classList.add('active');
                btnPy.classList.remove('active');
            } else {
                btnPy.classList.add('active');
                btnNode.classList.remove('active');
            }
            syncTerminalCodeDisplayCanvas();
        }

        // Connect Event Interaction Handlers Mappings
        routeSelectField.addEventListener('change', (e) => rebuildDropdownOptionsArrayDeck(e.target.value));
        downstreamDropdownField.addEventListener('change', () => syncTerminalCodeDisplayCanvas());
        volSlider.addEventListener('input', (e) => {
            sliderLabel.textContent = `${Number(e.target.value).toLocaleString()} calls / min`;
        });

        // Real-Time Diagnostic Execution Matrix Generation Logger Simulator Loop Routine
        function triggerExecutionSimulationTrace() {
            const currentRouteClassId = routeSelectField.value;
            const parsedVendorTargetId = downstreamDropdownField.value || "unknown";
            const currentPacketDensityValue = Number(volSlider.value).toLocaleString();
            const randomlyComputedLatencyMetric = Math.floor(Math.random() * 24) + 8;
            
            terminalLogs.textContent = `[TRANSACTION LOOP INITIALIZED] Scanning structural verification checksum arrays for dynamic parameters verification...\n`;
            
            setTimeout(() => {
                terminalLogs.textContent += `[EDGE DEPLOYMENT MATCHED] Extracted active context credentials. Encapsulating private authentication keys safely inside HSM envelopes...\n`;
            }, 180);

            setTimeout(() => {
                terminalLogs.textContent += `[ROUTING PIPELINE ACTIVE] Relaying unified structural query variables down target endpoint data lines...\n`;
            }, 420);

            setTimeout(() => {
                terminalLogs.textContent += `\n==================================================================================================\n`;
                terminalLogs.textContent += `➔ INCOMING GATEWAY HTTP CODE : 200 SUCCESS STATUS CLEAR\n`;
                terminalLogs.textContent += `➔ CORE SYSTEM ROUTE ENDPOINT : api.apinexus.engine/v1/gateway/orchestrate/${currentRouteClassId}\n`;
                terminalLogs.textContent += `➔ DELEGATED PROCESSING NODE  : isolation-vault://secure-hardware-module-fips/${parsedVendorTargetId}\n`;
                terminalLogs.textContent += `➔ PIPELINE PACKET FLUX LOAD  : Real-time traffic parsing running smooth at ${currentPacketDensityValue} ops / minute\n`;
                terminalLogs.textContent += `➔ COMPUTED EDGE PROXY CYCLE  : Operational bus latency tracked at ${randomlyComputedLatencyMetric}ms (99.998% Data Integrity Metric Pass)\n`;
                terminalLogs.textContent += `==================================================================================================\n`;
                terminalLogs.textContent += `\n>> Active integration telemetry pipeline trace tracking complete. Edge proxy structures standing by in loop parameters.`;
            }, 750);
        }

        /* ==========================================================================
           NEW FUNCTIONS: NAVIGATION AND SIMULATED DISPATCH FOR REQUEST QUOTE
           ========================================================================== */
        function navigateToQuoteForm(serviceValue) {
            const selectElement = document.getElementById('quoteServiceSelect');
            if (selectElement) {
                selectElement.value = serviceValue;
            }
            const quoteSection = document.getElementById('quote-desk');
            if (quoteSection) {
                quoteSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function handleQuoteFormDispatch(event) {
            event.preventDefault();
            const selectedService = document.getElementById('quoteServiceSelect').value;
            const terminal = document.getElementById('quoteTerminalResponse');
            
            terminal.style.color = "var(--accent-success)";
            terminal.textContent = `[QUOTE SUBSYSTEM INITIALIZED]\nEncoding enterprise topology specifications...\n`;
            
            setTimeout(() => {
                terminal.textContent += `[LEDGER COMMITTED] Intent metrics saved to regional isolation rings.\n`;
            }, 250);

            setTimeout(() => {
                terminal.textContent += `\n===========================================\n`;
                terminal.textContent += `STATUS     : 202 ACCEPTED\n`;
                terminal.textContent += `BUS MATRIX : ${selectedService.toUpperCase()}_VERTICAL_CORE\n`;
                terminal.textContent += `SLA LINE   : Tier-1 Multi-Acquirer Guaranteed\n`;
                terminal.textContent += `===========================================\n`;
                terminal.textContent += `\nAn enterprise account solution engineer will deliver your custom contract parameters shortly.`;
            }, 600);
        }

        // Baseline Document Activation Hooks Mount
        window.onload = () => {
            drawTargetPersonaLayoutView('dev');
            rebuildDropdownOptionsArrayDeck('email');
        };

        // Interactive Scroll Parallax for Dashboard Mockup
        window.addEventListener('scroll', () => {
            const dashboard = document.getElementById('parallaxDashboard');
            if (!dashboard) return;
            
            const rect = dashboard.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            if (sectionProgress >= 0 && sectionProgress <= 1) {
                const currentScale = 0.75 + (sectionProgress * 0.25);
                const currentRotationX = 20 - (sectionProgress * 20);
                dashboard.style.transform = `scale(${Math.min(currentScale, 1)}) rotateX(${Math.max(currentRotationX, 0)}deg)`;
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            const scrollSections = document.querySelectorAll(".matrix-scroll-section");
            const sidebarLinks = document.querySelectorAll("#matrixScrollSidebar .matrix-nav-item");

            const observerOptions = {
                root: null, 
                rootMargin: "-25% 0px -55% 0px", 
                threshold: 0
            };

            const matrixScrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetId = entry.target.getAttribute("id");

                        scrollSections.forEach(section => section.classList.remove("in-view"));
                        entry.target.classList.add("in-view");

                        sidebarLinks.forEach(link => {
                            link.classList.remove("active");
                            if (link.getAttribute("href") === `#${targetId}`) {
                                link.classList.add("active");
                                if (window.innerWidth <= 992) {
                                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                                }
                            }
                        });
                    }
                });
            }, observerOptions);

            scrollSections.forEach(section => matrixScrollObserver.observe(section));
        });



        // Data Matrix Structure holding Vertical Detail Pages & Provider Fallbacks
const verticalDataRegistry = {
    email: {
        title: "Email Service Abstraction Vertical",
        desc: "Consolidate and balance transactional mailing streams across major edge networks automatically.",
        providers: ["SendGrid", "Postmark", "Mailgun"],
        features: ["Auto-fallback to secondary delivery channels", "Standardized payload metadata format templates", "Compressed delivery feedback trace webhooks"]
    },
    messaging: {
        title: "Omnichannel Messaging Service Gateways",
        desc: "Deploy cross-region notification structures covering localized SMS relays and secure WhatsApp endpoints.",
        providers: ["Twilio", "Sinch", "Infobip"],
        features: ["Intelligent automatic carrier route tracking", "Uncapped burst messaging queue buffers", "Global phone number mapping lookup protocols"]
    },
    payments: {
        title: "Unified Global Clearing Token Core",
        desc: "Secure compliance card processing arrays without maintaining multi-tenant routing code architectures.",
        providers: ["Stripe", "PayPal", "Adyen"],
        features: ["FIPS 140-2 Level 3 cryptographic hardware vault protection", "Dynamic cross-merchant acquirer routing logic", "Standardized webhook state machine events"]
    },
    banking: {
        title: "Secure Open Banking Aggregation Nodes",
        desc: "Direct infrastructure bindings to verify user accounting matrix properties in real-time.",
        providers: ["Plaid", "Tink", "Yodlee"],
        features: ["Streaming account data ledger balance synchronization", "Automated direct ACH clearing logic pipelines", "Hardware attestation token validation"]
    },
    crm: {
        title: "Customer CRM Master State Synchronizer",
        desc: "Eliminate rate throttling locks during critical customer state lifecycle record updates.",
        providers: ["HubSpot", "Salesforce", "Zoho CRM"],
        features: ["Abstracted common JSON attribute maps", "High-frequency memory buffer data write storage", "Atomic verification execution loops"]
    },
    cloud: {
        title: "Decoupled Cross-Cloud Hypervisor Layers",
        desc: "Spin up server virtualization instances and storage array blocks uniformly in sub-second timelines.",
        providers: ["AWS Core", "Google Cloud", "DigitalOcean"],
        features: ["Edge network path optimization routing", "Unified isolated access credential token management", "Instant cross-region block deployment tracking"]
    }
};

// SIMULATE DETAILED PAGE NAVIGATION VIA MODAL INJECTION
function openVerticalDetail(verticalKey) {
    const data = verticalDataRegistry[verticalKey];
    if (!data) return;

    const modal = document.getElementById('verticalDetailModal');
    const container = document.getElementById('modalDynamicContent');

    let featuresHTML = '';
    data.features.forEach(f => {
        featuresHTML += `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`;
    });

    let providersHTML = '';
    data.providers.forEach(p => {
        providersHTML += `<span class="provider-micro-tag" style="margin-right:8px; font-size:12px; padding:6px 12px;">${p}</span>`;
    });

    container.innerHTML = `
        <div class="modal-detailed-body">
            <span class="badge-pill-micro" style="background: rgba(99,102,241,0.15); color: #818cf8;">Deep-Dive Architecture</span>
            <h2 style="margin-top:10px;">${data.title}</h2>
            <div class="accent-line"></div>
            <p style="color: #94a3b8; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">${data.desc}</p>
            
            <h4 style="color: #fff; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing:0.05em;">Supported Ecosystem Vendors</h4>
            <div style="margin-bottom: 30px;">${providersHTML}</div>

            <h4 style="color: #fff; margin-bottom: 12px; font-size: 14px; text-transform: uppercase; letter-spacing:0.05em;">Core Framework Capabilities</h4>
            <ul class="features-bullet-list">${featuresHTML}</ul>

            <div style="margin-top: 40px; display: flex; gap: 16px;">
                <button onclick="closeVerticalDetail(); prefillQuoteForm('${verticalKey}', '${data.providers[0]}');" class="btn btn-primary" style="padding:12px 24px;">Configure Custom Plan Quote</button>
                <button onclick="closeVerticalDetail()" class="btn btn-secondary" style="padding:12px 24px;">Return to Dashboard</button>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

function closeVerticalDetail() {
    document.getElementById('verticalDetailModal').style.display = 'none';
}

// SYNC DOWNSTREAM DROPDOWN SELECT OPTIONS BASED ON VERTICAL SELECTION
function syncQuoteDownstreamOptions() {
    const verticalSelect = document.getElementById('quoteServiceSelect');
    const downstreamSelect = document.getElementById('quoteDownstreamSelect');
    const activeKey = verticalSelect.value;
    
    // Clear current choices
    downstreamSelect.innerHTML = '';
    
    if(verticalDataRegistry[activeKey]) {
        verticalDataRegistry[activeKey].providers.forEach(provider => {
            const opt = document.createElement('option');
            opt.value = provider.toLowerCase().replace(/\s+/g, '-');
            opt.textContent = provider;
            downstreamSelect.appendChild(opt);
        });
    }
}

// SIMULATE DIRECT NAVIGATION PRE-FILL HOOK
function prefillQuoteForm(verticalKey, preferredProvider) {
    const verticalSelect = document.getElementById('quoteServiceSelect');
    if(verticalSelect) {
        verticalSelect.value = verticalKey;
        syncQuoteDownstreamOptions();
        
        // Match the downstream provider item if passed
        const downstreamSelect = document.getElementById('quoteDownstreamSelect');
        Array.from(downstreamSelect.options).forEach(option => {
            if(option.textContent.toLowerCase() === preferredProvider.toLowerCase()) {
                downstreamSelect.value = option.value;
            }
        });
        
        // UI Output Notification Update
        const terminalLog = document.getElementById('quoteTerminalResponse');
        if(terminalLog) {
            terminalLog.innerText = `[CONNECTED] Form payload pre-configured from service card route logic. Initialized context targets for API Cluster Class: ${verticalKey.toUpperCase()} targeting vendor (${preferredProvider}).`;
        }

        // Scroll smooth to viewport layout target
        document.getElementById('quote-desk').scrollIntoView({ behavior: 'smooth' });
    }
}

// INTEGRATION DISPATCH LOGGING OVERRIDE
function handleQuoteFormDispatch(event) {
    event.preventDefault();
    const service = document.getElementById('quoteServiceSelect').value;
    const downstream = document.getElementById('quoteDownstreamSelect').options[document.getElementById('quoteDownstreamSelect').selectedIndex].text;
    const terminalLog = document.getElementById('quoteTerminalResponse');
    
    if(terminalLog) {
        terminalLog.innerHTML = `<span style="color: #10b981;">[SUCCESS] Transaction mapping array submitted! Account token payload compiled for (${service.toUpperCase()}) integrating directly through edge validation gateway to downstream matrix target: [${downstream}]. Contract SLA routing maps will be delivered shortly.</span>`;
    }
}

// Bind dropdown change triggers on initialization setup
document.addEventListener("DOMContentLoaded", function() {
    syncQuoteDownstreamOptions();
});




// Full expanded platform service infrastructure dataset matching all user data
        const serviceNodeDataset = [
            /* ================= EMAIL SERVICES ================= */
            { id: 'sendgrid', name: 'SendGrid Engine', category: 'email', description: 'Transactional delivery structures, pipeline logs optimization, and metadata delivery validation frameworks.', keywords: ['sendgrid', 'email', 'transactional', 'smtp', 'delivery', 'logs', 'pipeline', 'optimization', 'validation'], score: '99.8%', latency: '14ms', uptime: '99.99%', icon: 'fa-envelope' },
            { id: 'postmark', name: 'Postmark Matrix', category: 'email', description: 'Lightning-fast delivery validation arrays and pinpoint logging layers optimized specifically for core app operations.', keywords: ['postmark', 'email', 'transactional', 'delivery', 'smtp', 'metadata', 'pipeline', 'logs', 'validation'], score: '99.5%', latency: '9ms', uptime: '99.995%', icon: 'fa-paper-plane' },
            { id: 'mailgun', name: 'Mailgun Pipeline Node', category: 'email', description: 'Robust multi-tenant delivery pipelines, programmatic parsing loops, and bulk notification abstraction profiles.', keywords: ['mailgun', 'email', 'transactional', 'bulk', 'smtp', 'validation', 'delivery', 'pipeline', 'logs'], score: '98.9%', latency: '19ms', uptime: '99.94%', icon: 'fa-box-archive' },

            /* ================= MESSAGING SERVICES ================= */
            { id: 'twilio', name: 'Twilio Relay Hub', category: 'messaging', description: 'Global baseline SMS relays, cross-region WhatsApp business accounts, and multi-tier network text alerts.', keywords: ['twilio', 'sms', 'messaging', 'whatsapp', 'text', 'alerts', 'relay', 'network'], score: '99.9%', latency: '38ms', uptime: '99.999%', icon: 'fa-comments' },
            { id: 'sinch', name: 'Sinch Omni-Channel Vector', category: 'messaging', description: 'Direct carrier infrastructure configurations matching localized message routes, flash verification parameters, and cross-border numbers.', keywords: ['sinch', 'sms', 'messaging', 'whatsapp', 'alerts', 'verification', 'text', 'network', 'relays'], score: '97.8%', latency: '45ms', uptime: '99.96%', icon: 'fa-message' },
            { id: 'infobip', name: 'Infobip Enterprise Core', category: 'messaging', description: 'Enterprise-tier backup failovers across text messaging arrays, rich media communications, and automated geo-compliance channels.', keywords: ['infobip', 'sms', 'messaging', 'whatsapp', 'text', 'network', 'alerts', 'relays'], score: '98.4%', latency: '52ms', uptime: '99.95%', icon: 'fa-satellite-dish' },

            /* ================= PAYMENT GATEWAYS ================= */
            { id: 'stripe', name: 'Stripe Global Ledger', category: 'payments', description: 'Secure global card processing systems, localized checkout matrices, and multi-tier membership tables.', keywords: ['stripe', 'payments', 'gateway', 'card', 'checkout', 'membership', 'processing'], score: '99.9%', latency: '48ms', uptime: '99.999%', icon: 'fa-credit-card' },
            { id: 'paypal', name: 'PayPal Commerce Abstraction', category: 'payments', description: 'Global user wallet interfaces, flexible authorization matrices, and hardware-secured checkout routes.', keywords: ['paypal', 'payments', 'gateway', 'checkout', 'wallet', 'membership', 'card', 'processing'], score: '96.5%', latency: '94ms', uptime: '99.95%', icon: 'fa-wallet' },
            { id: 'adyen', name: 'Adyen Settlement Node', category: 'payments', description: 'Unified multi-region bank acquisition structures, automated conversion models, and alternative asset checkout matrices.', keywords: ['adyen', 'payments', 'gateway', 'card', 'checkout', 'settlement', 'processing', 'membership'], score: '99.1%', latency: '61ms', uptime: '99.98%', icon: 'fa-building-columns' },

            /* ================= OPEN BANKING APIs ================= */
            { id: 'plaid', name: 'Plaid Sync Fabric', category: 'banking', description: 'Financial ledger synchronization sweeps, asset validation processing, and instant structural ACH rails.', keywords: ['plaid', 'banking', 'ach', 'financial', 'ledger', 'asset', 'validation', 'synchronization', 'sweeps'], score: '99.4%', latency: '120ms', uptime: '99.97%', icon: 'fa-link' },
            { id: 'tink', name: 'Tink Open Framework', category: 'banking', description: 'Pan-European banking connection layouts, aggregated account analysis profiles, and payment initiation structures.', keywords: ['tink', 'banking', 'ach', 'financial', 'ledger', 'open banking', 'asset', 'validation', 'synchronization'], score: '98.2%', latency: '145ms', uptime: '99.96%', icon: 'fa-shuffle' },
            { id: 'yodlee', name: 'Yodlee Vault Broker', category: 'banking', description: 'Institutional-grade asset validation arrays, balance reconciliation pipelines, and broad investment statement sweeps.', keywords: ['yodlee', 'banking', 'financial', 'ledger', 'asset', 'sweeps', 'validation', 'synchronization', 'ach'], score: '97.5%', latency: '190ms', uptime: '99.92%', icon: 'fa-vault' },

            /* ================= CUSTOMER CRM APIs ================= */
            { id: 'hubspot', name: 'HubSpot Lifecycle Engine', category: 'crm', description: 'Bi-directional profile state synchronization maps, lifecycle funnel tags, and workspace account data sweeps.', keywords: ['hubspot', 'crm', 'synchronization', 'funnel', 'lifecycle', 'data', 'profile', 'state', 'sweeps'], score: '99.2%', latency: '34ms', uptime: '99.98%', icon: 'fa-users-gear' },
            { id: 'salesforce', name: 'Salesforce Core Matrix', category: 'crm', description: 'Extensible customer state mapping systems, macro automation vectors, and high-density corporate database sweeps.', keywords: ['salesforce', 'crm', 'synchronization', 'funnel', 'data', 'lifecycle', 'profile', 'state', 'sweeps'], score: '98.7%', latency: '75ms', uptime: '99.96%', icon: 'fa-cloud-meatball' },
            { id: 'zoho', name: 'Zoho CRM Data Route', category: 'crm', description: 'Frictionless bi-directional accounts parsing tools, lead routing loops, and contextual workspace pipeline tracking.', keywords: ['zoho', 'crm', 'synchronization', 'funnel', 'tags', 'sweeps', 'lifecycle', 'profile', 'state'], score: '97.9%', latency: '41ms', uptime: '99.95%', icon: 'fa-address-card' },

            /* ================= CLOUD INFRASTRUCTURE ================= */
            { id: 'aws', name: 'AWS Core Array', category: 'cloud', description: 'Server compute instance pooling sweeps, distributed storage bucket arrays, and virtualization routing nodes.', keywords: ['aws', 'cloud', 'compute', 'storage', 'infrastructure', 'bucket', 'server', 'virtualization', 'pooling'], score: '99.9%', latency: '12ms', uptime: '99.999%', icon: 'fa-server' },
            { id: 'gcp', name: 'Google Cloud Platform Node', category: 'cloud', description: 'Elastic computing infrastructure pools, globally distributed key-value storage grids, and low-latency network routers.', keywords: ['google cloud', 'gcp', 'cloud', 'compute', 'storage', 'infrastructure', 'server', 'virtualization', 'pooling'], score: '99.7%', latency: '15ms', uptime: '99.995%', icon: 'fa-cloud' },
            { id: 'digitalocean', name: 'DigitalOcean Droplet Pool', category: 'cloud', description: 'Simplified virtual hardware slicing, rapid droplet instance orchestration arrays, and high-speed network volume maps.', keywords: ['digitalocean', 'cloud', 'compute', 'storage', 'infrastructure', 'droplet', 'server', 'virtualization', 'pooling'], score: '98.6%', latency: '22ms', uptime: '99.98%', icon: 'fa-water' }
        ];

        let activeCategoryFilterId = 'all';

        // Extract search query parameter out of URL parameters safely
        function parseTargetSearchQueryParameter() {
            const URLParameters = new URLSearchParams(window.location.search);
            return URLParameters.get('query') || '';
        }

        // Search engine core logic mapping queries to datasets
        function buildRenderedServicesListView() {
            const targetOutputContainer = document.getElementById('resultsStreamWrapper');
            const fallbackContainer = document.getElementById('resultsEmptyStateView');
            const liveQueryString = document.getElementById('liveResultsModifierInput').value.trim().toLowerCase();

            targetOutputContainer.innerHTML = '';

            const processedCollectionFilterSet = serviceNodeDataset.filter(node => {
                const isCategoryAligned = (activeCategoryFilterId === 'all' || node.category === activeCategoryFilterId);
                let isTextAligned = true;

                if (liveQueryString) {
                    isTextAligned = node.name.toLowerCase().includes(liveQueryString) ||
                                    node.description.toLowerCase().includes(liveQueryString) ||
                                    node.keywords.some(tag => tag.includes(liveQueryString)) ||
                                    node.category.toLowerCase().includes(liveQueryString);
                }
                return isCategoryAligned && isTextAligned;
            });

            if (processedCollectionFilterSet.length === 0) {
                fallbackContainer.style.display = 'block';
                return;
            }

            fallbackContainer.style.display = 'none';
            processedCollectionFilterSet.forEach(api => {
                const resultCard = document.createElement('div');
                resultCard.className = 'router-result-card';
                resultCard.innerHTML = `
                    <div style="width: 48px; height: 48px; border-radius: 10px; background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: center; font-size: 20px; color: var(--brand-primary);">
                        <i class="fa-solid ${api.icon}"></i>
                    </div>
                    <div>
                        <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                            <h4 style="font-size: 16px; font-weight: 700; color: var(--text-primary);">${api.name}</h4>
                            <span style="font-family: 'JetBrains Mono', monospace; font-size: 11px; background-color: rgba(168, 85, 247, 0.1); color: var(--accent-purple); padding: 2px 8px; border-radius: 4px; font-weight: 600;">
                                ${api.score} System Score
                            </span>
                            <span style="font-family: 'JetBrains Mono', monospace; font-size: 10px; background-color: var(--bg-surface-tertiary); color: var(--text-secondary); padding: 2px 8px; border-radius: 4px; text-transform: uppercase;">
                                ${api.category}
                            </span>
                        </div>
                        <p style="font-size: 13.5px; color: var(--text-secondary); margin-top: 6px; line-height: 1.5;">${api.description}</p>
                        <div class="router-result-card-metrics" style="display: flex; gap: 16px; margin-top: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--text-muted); flex-wrap: wrap;">
                            <span><i class="fa-solid fa-gauge-high"></i> Latency: <strong style="color: var(--text-secondary);">${api.latency}</strong></span>
                            <span><i class="fa-solid fa-circle-nodes"></i> SLA: <strong style="color: var(--text-secondary);">${api.uptime}</strong></span>
                            <span><i class="fa-solid fa-square-terminal"></i> Status: <strong style="color: var(--accent-success);">Connected</strong></span>
                        </div>
                    </div>
                    <div>
                        <a href="index.html#lab" class="btn btn-secondary" style="font-size: 12px; padding: 10px 16px; white-space: nowrap;">Execute Sandbox</a>
                    </div>
                `;
                targetOutputContainer.appendChild(resultCard);
            });
        }

        function switchDiscoveryCategory(targetCategory) {
            activeCategoryFilterId = targetCategory;
            document.querySelectorAll('.search-category-tab').forEach(tab => {
                if(tab.getAttribute('onclick').includes(`'${targetCategory}'`)) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            buildRenderedServicesListView();
        }

        // Global Initialization Window Handlers
        window.onload = () => {
            const parsedTokenQuery = parseTargetSearchQueryParameter();
            if (parsedTokenQuery) {
                document.getElementById('liveResultsModifierInput').value = parsedTokenQuery;
                document.getElementById('resultsTitleText').textContent = `Matches for "${parsedTokenQuery}"`;
            } else {
                document.getElementById('resultsTitleText').textContent = 'Mapped Core Matrices';
            }
            
            buildRenderedServicesListView();

            // Real-time listener updating container lists and layout text as you type
            document.getElementById('liveResultsModifierInput').addEventListener('input', () => {
                const textValue = document.getElementById('liveResultsModifierInput').value.trim();
                document.getElementById('resultsTitleText').textContent = textValue ? `Matches for "${textValue}"` : 'Mapped Core Matrices';
                buildRenderedServicesListView();
            });

            // Production Sync theme color loop logic
            const masterThemeBtn = document.getElementById('masterThemeBtn');
            const themeIconSlot = document.getElementById('themeIconSlot');
            const themeLabelText = document.getElementById('themeLabelText');

            masterThemeBtn.addEventListener('click', () => {
                const activeState = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
                document.documentElement.setAttribute('data-theme', activeState);
                
                if (activeState === 'light') {
                    themeIconSlot.className = 'fa-solid fa-sun';
                    themeLabelText.textContent = 'Light IDE Mode';
                } else {
                    themeIconSlot.className = 'fa-solid fa-moon';
                    themeLabelText.textContent = 'Dark IDE Mode';
                }
            });
        };







// Function to capture input and redirect to service-list.html
function executeRequirementMappingRoute() {
    const query = document.getElementById('apiRequirementSearchInput').value.trim();
    if (query) {
        // Encode the search string safely into the URL parameters
        window.location.href = `service-list.html?query=${encodeURIComponent(query)}`;
    } else {
        // If empty, just navigate to the clean page
        window.location.href = 'service-list.html';
    }
}

// Function for Popular Specs quick-clicks
function fillRequirementQuerySpec(textSpecString) {
    document.getElementById('apiRequirementSearchInput').value = textSpecString;
    // Instantly trigger the redirect
    executeRequirementMappingRoute();
}

// Add event listener to capture 'Enter' key press inside the input field
window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('apiRequirementSearchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                executeRequirementMappingRoute();
            }
        });
    }
});
