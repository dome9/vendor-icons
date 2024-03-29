const fs = require('fs');
let iconsMap = require('../map.json');

let assets = [
{type:'S3Bucket', displayName: 'AWS S3 Bucket', platform: 'aws'},
{type:'Instance', displayName: 'AWS EC2 Instance', platform: 'aws'},
{type:'Lambda', displayName: 'AWS Lambda', platform: 'aws'},
{type:'IamRole', displayName: 'AWS IAM Role', platform: 'aws'},
{type:'Volume', displayName: 'AWS Volume', platform: 'aws'},
{type:'EbsSnapshot', displayName: 'AWS EBS Snapshot', platform: 'aws'},
{type:'IamUser', displayName: 'AWS IAM User', platform: 'aws'},
{type:'DynamoDbTable', displayName: 'AWS DynamoDb Table', platform: 'aws'},
{type:'ApplicationAutoScalingPolicy', displayName: 'Application Auto Scaling Policy', platform: 'aws'},
{type:'VPC', displayName: 'AWS VPC', platform: 'aws'},
{type:'AcmCertificate', displayName: 'AWS ACM Certificate', platform: 'aws'},
{type:'KMS', displayName: 'AWS KMS', platform: 'aws'},
{type:'ApiGateway', displayName: 'AWS API Gateway', platform: 'aws'},
{type:'ApiGatewayV2', displayName: 'AWS API Gateway V2', platform: 'aws'},
{type:'RDS', displayName: 'AWS RDS', platform: 'aws'},
{type:'CloudFront', displayName: 'AWS CloudFront', platform: 'aws'},
{type:'IamServerCertificate', displayName: 'AWS IAM Server Certificate', platform: 'aws'},
{type:'VPNConnection', displayName: 'AWS VPN Connection', platform: 'aws'},
{type:'CustomerGateway', displayName: 'AWS Customer Gateway', platform: 'aws'},
{type:'Kinesis', displayName: 'AWS Kinesis', platform: 'aws'},
{type:'CloudTrail', displayName: 'AWS CloudTrail', platform: 'aws'},
{type:'EFS', displayName: 'AWS EFS', platform: 'aws'},
{type:'WAFRegional', displayName: 'AWS WAF Regional', platform: 'aws'},
{type:'WAFRegionalV2', displayName: 'AWS WAF Regional V2', platform: 'aws'},
{type:'Redshift', displayName: 'AWS Redshift', platform: 'aws'},
{type:'ELB', displayName: 'AWS ELB', platform: 'aws'},
{type:'ApplicationLoadBalancer', displayName: 'AWS ALB', platform: 'aws'},
{type:'NetworkLoadBalancer', displayName: 'AWS NLB', platform: 'aws'},
{type:'GatewayLoadBalancer', displayName: 'AWS GLB', platform: 'aws'},
{type:'EcsCluster', displayName: 'AWS ECS Cluster', platform: 'aws'},
{type:'EcsService', displayName: 'AWS ECS Service', platform: 'aws'},
{type:'EcsTaskDefinition', displayName: 'AWS ECS Task Definition', platform: 'aws'},
{type:'EcsTask', displayName: 'AWS ECS Task', platform: 'aws'},
{type:'EksCluster', displayName: 'AWS EKS Cluster', platform: 'aws'},
{type:'VPNGateway', displayName: 'AWS VPN Gateway', platform: 'aws'},
{type:'Route53HostedZone', displayName: 'AWS Route 53 Hosted Zone', platform: 'aws'},
{type:'Route53Domain', displayName: 'AWS Route 53 Domain', platform: 'aws'},
{type:'SageMakerNotebook', displayName: 'AWS Sage Marker Notebook', platform: 'aws'},
{type:'ElasticSearchDomain', displayName: 'AWS Elasticsearch Domain', platform: 'aws'},
{type:'EmrCluster', displayName: 'AWS EMR Cluster', platform: 'aws'},
{type:'VpcEndpoint', displayName: 'AWS VPC Endpoint', platform: 'aws'},
{type:'Volume', displayName: 'AWS Volume', platform: 'aws'},
{type:'ElastiCache', displayName: 'AWS ElastiCache', platform: 'aws'},
{type:'ConfigSetting', displayName: 'AWS Config Setting', platform: 'aws'},
{type:'Sqs', displayName: 'AWS SQS', platform: 'aws'},
{type:'NatGateway', displayName: 'AWS NAT Gateway', platform: 'aws'},
{type:'GlueSecurityConfiguration', displayName: 'AWS Glue Security Configuration', platform: 'aws'},
{type:'GlueConnection', displayName: 'AWS Glue Connection', platform: 'aws'},
{type:'StepFunctionStateMachine', displayName: 'AWS Step Function State Machine', platform: 'aws'},
{type:'SnsTopic', displayName: 'AWS SNS', platform: 'aws'},
{type:'SnsPlatformApplication', displayName: 'AWS SNS Platform Application', platform: 'aws'},
{type:'MskCluster', displayName: 'AWS MSK Cluster', platform: 'aws'},
{type:'Region', displayName: 'Region', platform: 'aws'},
{type:'Organization', displayName: 'Organization', platform: 'aws'},
{type:'Account', displayName: 'Account', platform: 'aws'},
{type:'NetworkInterface', displayName: 'Network Interface', platform: 'aws'},
{type:'TransitGateway', displayName: 'AWS Transit Gateway', platform: 'aws'},
{type:'SecretManager', displayName: 'AWS Secret Manager', platform: 'aws'},
{type:'RouteTable', displayName: 'AWS Route Table', platform: 'aws'},
{type:'SageMakerTrainingJob', displayName: 'AWS Sage Maker Training job', platform: 'aws'},
{type:'CognitoIdentityPool', displayName: 'Cognito Identity Pool', platform: 'aws'},
{type:'CognitoUserPool', displayName: 'Cognito User Pool', platform: 'aws'},
{type:'Workspace', displayName: 'AWS Workspace', platform: 'aws'},
{type:'EcrRepository', displayName: 'AWS ECR Repository', platform: 'aws'},
{type:'TranslationJob', displayName: 'AWS Translation Job', platform: 'aws'},
{type:'TranslationTerminology', displayName: 'AWS Translation Terminology', platform: 'aws'},
{type:'TranscribeJob', displayName: 'AWS Transcribe Job', platform: 'aws'},
{type:'TranscribeMedicalJob', displayName: 'AWS Transcribe Medical Job', platform: 'aws'},
{type:'Personalize', displayName: 'AWS Personalize', platform: 'aws'},
{type:'Transfer', displayName: 'Transfer', platform: 'aws'},
{type:'SystemManagerParameter', displayName: 'AWS System Manager Parameter', platform: 'aws'},
{type:'RDSDBSnapshot', displayName: 'RDS DB Snapshot', platform: 'aws'},
{type:'RDSDBCluster', displayName: 'RDS DB Cluster', platform: 'aws'},
{type:'MqBroker', displayName: 'MQ Broker', platform: 'aws'},
{type:'NetworkFirewall', displayName: 'AWS Network Firewall', platform: 'aws'},
{type:'AthenaWorkGroup', displayName: 'AWS Athena Work Group', platform: 'aws'},
{type:'DmsEndpoint', displayName: 'AWS DMS Endpoint', platform: 'aws'},
{type:'CloudFormationStack', displayName: 'AWS Cloud Formation Stack', platform: 'aws'},
{type:'KinesisFirehose', displayName: 'AWS Kinesis Firehose', platform: 'aws'},
{type:'StorageGateway', displayName: 'AWS Storage Gateway', platform: 'aws'},
{type:'SystemManagerDocument', displayName: 'AWS System Manager Document', platform: 'aws'},
{type:'CustomDomainName', displayName: 'AWS Custom Domain Name', platform: 'aws'},
{type:'ElasticBeanstalk', displayName: 'AWS Elastic Beanstalk', platform: 'aws'},
{type:'Shield', displayName: 'AWS Shield', platform: 'aws'},
{type:'BackupVault', displayName: 'AWS Backup Vault', platform: 'aws'},
{type:'SES', displayName: 'AWS SES', platform: 'aws'},
{type:'IamOpenIdConnectProvider', displayName: 'AWS IAM OpenId Connect Provider', platform: 'aws'},
{type:'IamSAMLProvider', displayName: 'AWS IAM SAML Provider', platform: 'aws'},
{type:'LogGroup', displayName: 'AWS Log Group', platform: 'aws'},
{type:'FSx', displayName: 'AWS FSx', platform: 'aws'},
{type:'FSxBackup', displayName: 'AWS FSx Backup', platform: 'aws'},
{type:'LoadBalancer', displayName: 'Azure Load Balancer', platform: 'azure'},
{type:'ServiceFabricCluster', displayName: 'Azure Service Fabric Cluster', platform: 'azure'},
{type:'VirtualMachine', displayName: 'Azure Virtual Machine', platform: 'azure'},
{type:'VirtualNetworkGateway', displayName: 'Azure Virtual Network Gateway', platform: 'azure'},
{type:'Firewall', displayName: 'Azure Firewall', platform: 'azure'},
{type:'StorageAccount', displayName: 'Azure Storage Account', platform: 'azure'},
{type:'KeyVault', displayName: 'Azure Key Vault', platform: 'azure'},
{type:'RedisCache', displayName: 'Azure Redis Cache', platform: 'azure'},
{type:'SQLServer', displayName: 'Azure SQL Server', platform: 'azure'},
{type:'ApplicationGateway', displayName: 'Azure Application Gateway', platform: 'azure'},
{type:'RouteTable', displayName: 'Azure Route Table', platform: 'azure'},
{type:'NetworkWatcher', displayName: 'Azure Network Watcher', platform: 'azure'},
{type:'NsgFlowLog', displayName: 'Azure NSG Flow Log', platform: 'azure'},
{type:'LogicApp', displayName: 'Azure Logic App', platform: 'azure'},
{type:'PostgreSQL', displayName: 'Azure Postgre SQL', platform: 'azure'},
{type:'ContainerRegistry', displayName: 'Azure Container Registry', platform: 'azure'},
{type:'CosmosDbAccount', displayName: 'Azure Cosmos DB Account', platform: 'azure'},
{type:'PolicyAssignment', displayName: 'Azure Policy Assignment', platform: 'azure'},
{type:'LogProfile', displayName: 'Azure Log Profile', platform: 'azure'},
{type:'VirtualMachineScaleSet', displayName: 'Azure Virtual Machine Scale Set', platform: 'azure'},
{type:'ApplicationSecurityGroup', displayName: 'Application Security Group', platform: 'azure'},
{type:'AnalysisServiceServer', displayName: 'Azure Analysis Service Server', platform: 'azure'},
{type:'AksCluster', displayName: 'Azure Kubernetes Service Cluster', platform: 'azure'},
{type:'FunctionApp', displayName: 'Azure Function App', platform: 'azure'},
{type:'WebApp', displayName: 'Azure Web App', platform: 'azure'},
{type:'User', displayName: 'Azure User', platform: 'azure'},
{type:'VMSSInstance', displayName: 'Azure Virtual Machine Scale Set Instance', platform: 'azure'},
{type:'SqlManagedInstance', displayName: 'Azure SQL Managed Instance', platform: 'azure'},
{type:'ActivityLogAlertRule', displayName: 'Azure Activity Log Alert Rule', platform: 'azure'},
{type:'ApiManagementService', displayName: 'Azure API Management Service', platform: 'azure'},
{type:'HDInsight', displayName: 'Azure HD Insight', platform: 'azure'},
{type:'DataExplorerCluster', displayName: 'Azure Data Explorer Cluster', platform: 'azure'},
{type:'Disk', displayName: 'Azure Compute Disk', platform: 'azure'},
{type:'RegionalWAF', displayName: 'Azure Regional WAF', platform: 'azure'},
{type:'RoleAssignment', displayName: 'Azure Role Assignment', platform: 'azure'},
{type:'RoleDefinition', displayName: 'Azure Role Definition', platform: 'azure'},
{type:'VNet', displayName: 'Azure Virtual Network', platform: 'azure'},
{type:'ServiceBus', displayName: 'Azure Service Bus', platform: 'azure'},
{type:'EventHubNamespace', displayName: 'Azure Event Hub Namespace', platform: 'azure'},
{type:'MariaDb', displayName: 'Azure Maria DB', platform: 'azure'},
{type:'Bastion', displayName: 'Azure Bastion', platform: 'azure'},
{type:'SecurityContact', displayName: 'Azure Security Contact', platform: 'azure'},
{type:'AutoProvisioningSettings', displayName: 'Azure Auto Provisioning Settings', platform: 'azure'},
{type:'ContainerInstance', displayName: 'Azure Container Instance', platform: 'azure'},
{type:'DatabricksWorkspace', displayName: 'Azure Databricks Workspace', platform: 'azure'},
{type:'MySQLDBFlexibleServer', displayName: 'Azure MySQL DB Flexible Server', platform: 'azure'},
{type:'MySQLDBSingleServer', displayName: 'Azure MySQL DB Single Server', platform: 'azure'},
{type:'SpringCloud', displayName: 'Azure Spring Cloud', platform: 'azure'},
{type:'AppServiceEnvironment', displayName: 'Azure App Service Environment', platform: 'azure'} ,
{type:'CognitiveService', displayName: 'Azure Cognitive Service', platform: 'azure'},
{type:'ServiceAccount', displayName: 'GCP Service Account', platform: 'gcp'},
{type:'BigQuery', displayName: 'GCP BigQuery', platform: 'gcp'},
{type:'BigQueryTable', displayName: 'GCP Big Query Table', platform: 'gcp'},
{type:'StorageBucket', displayName: 'GCP Storage Bucket', platform: 'gcp'},
{type:'GkeCluster', displayName: 'GCP GKE Cluster', platform: 'gcp'},
{type:'KmsKeyRing', displayName: 'GCP KMS Key Ring', platform: 'gcp'},
{type:'VMInstance', displayName: 'GCP Virtual Machine Instance', platform: 'gcp'},
{type:'CloudSql', displayName: 'GCP Cloud SQL', platform: 'gcp'},
{type:'CloudFunction', displayName: 'GCP Cloud Function', platform: 'gcp'},
{type:'BigTable', displayName: 'GCP BigTable', platform: 'gcp'},
{type:'Network', displayName: 'GCP Network', platform: 'gcp'},
{type:'PubSubTopic', displayName: 'GCP PubSub Topic', platform: 'gcp'},
{type:'GcpIamUser', displayName: 'GCP IAM User', platform: 'gcp'},
{type:'GcpIamGroup', displayName: 'GCP IAM Group', platform: 'gcp'},
{type:'GcpIamPolicy', displayName: 'GCP IAM Policy', platform: 'gcp'},
{type:'GcpIamRole', displayName: 'GCP IAM Role', platform: 'gcp'},
{type:'Image', displayName: 'GCP Compute Image', platform: 'gcp'},
{type:'Redis', displayName: 'GCP Memorystore Redis', platform: 'gcp'},
{type:'AppEngine', displayName: 'GCP App Engine', platform: 'gcp'},
{type:'FilestoreInstance', displayName: 'GCP Filestore Instance', platform: 'gcp'},
{type:'Router', displayName: 'GCP Compute Router', platform: 'gcp'},
{type:'Disk', displayName: 'GCP Compute Disk', platform: 'gcp'},
{type:'Route', displayName: 'GCP Route', platform: 'gcp'},
{type:'UrlMap', displayName: 'GCP Url Map', platform: 'gcp'},
{type:'TcpUdpLoadBalancerTargetPool', displayName: 'GCP TCP UDP Load Balancer Target Pool', platform: 'gcp'},
{type:'InstanceTemplate', displayName: 'GCP Instance Template', platform: 'gcp'},
{type:'APIKey', displayName: 'GCP API Key', platform: 'gcp'},
{type:'AlertPolicy', displayName: 'GCP Alert Policy', platform: 'gcp'},
{type:'LogBasedMetric', displayName: 'GCP Log Based Metric', platform: 'gcp'},
{type:'LoadBalancerSslPolicy', displayName: 'GCP Load Balancer SSL Policy', platform: 'gcp'},
{type:'BackendService', displayName: 'GCP Backend Service', platform: 'gcp'},
{type:'LogSink', displayName: 'GCP Log Sink', platform: 'gcp'},
{type:'LogBucket', displayName: 'GCP Log Bucket', platform: 'gcp'},
{type:'ForwardingRule', displayName: 'GCP Forwarding Rule', platform: 'gcp'},
{type:'DnsManagedZone', displayName: 'GCP DNS Managed Zone', platform: 'gcp'},
{type:'TcpLoadBalancerTargetProxy', displayName: 'GCP Tcp Load Balancer Target Proxy', platform: 'gcp'},
{type:'SslLoadBalancerTargetProxy', displayName: 'GCP SSL Load Balancer Target Proxy', platform: 'gcp'},
{type:'HttpsLoadBalancerTargetProxy', displayName: 'GCP Https Load Balancer Target Proxy', platform: 'gcp'},
{type:'DataprocCluster', displayName: 'GCP Dataproc Cluster', platform: 'gcp'},
{type:'EssentialContact', displayName: 'GCP Essential Contact', platform: 'gcp'},
{type:'KubernetesNode', displayName: 'Kubernetes Node', platform: 'kubernetes'},
{type:'KubernetesPod', displayName: 'Kubernetes Pod', platform: 'kubernetes'},
{type:'KubernetesService', displayName: 'Kubernetes Service', platform: 'kubernetes'},
{type:'KubernetesIngress', displayName: 'Kubernetes Ingress', platform: 'kubernetes'},
{type:'KubernetesNetworkPolicy', displayName: 'Kubernetes Network Policy', platform: 'kubernetes'},
{type:'KubernetesRole', displayName: 'Kubernetes Role', platform: 'kubernetes'},
{type:'KubernetesRoleBinding', displayName: 'Kubernetes Role Binding', platform: 'kubernetes'},
{type:'KubernetesServiceAccount', displayName: 'Kubernetes Service Account', platform: 'kubernetes'},
{type:'KubernetesPodSecurityPolicy', displayName: 'Kubernetes Pod Security Policy', platform: 'kubernetes'},
{type:'KubernetesNamespace', displayName: 'Kubernetes Namespace', platform: 'kubernetes'},
{type:'KubernetesCluster', displayName: 'Kubernetes Cluster', platform: 'kubernetes'},
{type:'KubernetesImage', displayName: 'Kubernetes Image', platform: 'kubernetes'},
{type:'ContainerRegistryImage', displayName: 'Container Registry Image', platform: 'containerregistry'},
{type:'KubernetesJob', displayName: 'Kubernetes Job', platform: 'kubernetes'},
{type:'KubernetesCronJob', displayName: 'Kubernetes CronJob', platform: 'kubernetes'},
{type:'KubernetesStatefulSet', displayName: 'Kubernetes StatefulSet', platform: 'kubernetes'},
{type:'KubernetesDaemonSet', displayName: 'Kubernetes DaemonSet', platform: 'kubernetes'},
{type:'KubernetesDeployment', displayName: 'Kubernetes Deployment', platform: 'kubernetes'},
{type:'KubernetesReplicaSet', displayName: 'Kubernetes ReplicaSet', platform: 'kubernetes'},
{type:'OpenshiftSecurityContextConstraint', displayName: 'Openshift Security Context Constraint', platform: 'kubernetes'},
{type:'ActionTrail', displayName: 'Alibaba Action Trail', platform: 'alibaba'},
{type:'EcsInstance', displayName: 'Alibaba ECS Instance', platform: 'alibaba'},
{type:'EcsDisk', displayName: 'Alibaba ECS Disk', platform: 'alibaba'},
{type:'VPC', displayName: 'Alibaba VPC', platform: 'alibaba'},
{type:'VSwitch', displayName: 'Alibaba VSwitch', platform: 'alibaba'},
{type:'OssBucket', displayName: 'Alibaba OSS Bucket', platform: 'alibaba'},
{type:'RamUser', displayName: 'Alibaba RAM User', platform: 'alibaba'},
{type:'RamGroup', displayName: 'Alibaba RAM Group', platform: 'alibaba'},
{type:'RamPasswordPolicy', displayName: 'Alibaba RAM Password Policy', platform: 'alibaba'},
{type:'RamRole', displayName: 'Alibaba RAM Role', platform: 'alibaba'},
{type:'RamPolicy', displayName: 'Alibaba RAM Policy', platform: 'alibaba'},
{type:'RdsDbInstance', displayName: 'Alibaba RDS DB Instance', platform: 'alibaba'},
{type:'SecurityGroup', displayName: 'Alibaba Security Group', platform: 'alibaba'},
{type:'NAS', displayName: 'Alibaba NAS', platform: 'alibaba'},
{type:'KMS', displayName: 'Alibaba KMS', platform: 'alibaba'},
{type:'SLB', displayName: 'Alibaba SLB', platform: 'alibaba'},
{type:'AutoScalingGroup', displayName: 'Alibaba Auto Scaling Group', platform: 'alibaba'},
{type:'Agent', displayName: 'Dome9 Agent', platform: 'Dome9'},
{type:'ShiftLeftImage', displayName: 'ShiftLeft Image', platform: 'shiftleft'},
{type:'EcsImage', displayName: 'AWS ECS Image', platform: 'aws'},
];


let newMap = [];

function getDisplayName(type) {
    let displayName = 'not-found'
    assets.forEach(asset => {
        if (asset.type === type) {
            displayName = asset.displayName;
        }
    });
    return displayName;
}

// function loopMap(type) {
//     let isExists = false;
//     iconsMap.forEach(icon => {
//         if (type === icon.type) {
//             isExists = true;
//         }
//     });
//     return isExists;
// }

// for (let i = 0; i < assets.length; i++) {
//     const asset = assets[i];
//    if ( !loopMap(asset.type)) {
//     console.log(asset.type);
//    }

// }

for (let i = 0; i < iconsMap.length; i++) {
    const icon = iconsMap[i];
    if (icon.type) {
        let display = getDisplayName(icon.type);
        icon['displayName'] = display ;
        newMap.push(icon);
    }
    else {
        console.log(icon);
    }

}

fs.writeFileSync('./test-map.json', JSON.stringify(newMap, null, 2));

