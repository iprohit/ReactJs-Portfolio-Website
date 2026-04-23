pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t portfolio-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                docker rm -f app || true
                docker run -d -p 80:80 --name app portfolio-app
                '''
            }
        }
    }
}