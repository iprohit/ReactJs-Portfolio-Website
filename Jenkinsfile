pipeline {
    agent any

    stages {

        stage('Build React') {
    steps {
        sh '''
        export NODE_OPTIONS=--max-old-space-size=1024
        npm install --legacy-peer-deps
        npm run build
        '''
    }
}

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