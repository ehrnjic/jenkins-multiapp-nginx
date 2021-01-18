pipeline {
    agent any
    stages {
        stage('Build all 3 images with docker-compose') {
            steps {
                sh '''
                    docker-compose -f docker-compose.yaml build
                '''
            }
        }
        stage('Run test script inside container') {
            steps {
                sh '''
                    echo 'Test'
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    echo 'Deploy'
                '''
            }
        }
    }
}